import { lightModeCss, lightModeButtonCss } from './lightMode.css';

export const isLightMode = (): Promise<string> =>
  new Promise((resolve, _reject) =>
    chrome.storage.local.get(['isLightMode'], (val) => {
      resolve(val['isLightMode']);
    })
  );

export const setLightMode = async () => {
  if ((await isLightMode()) && JSON.parse((await isLightMode()) || '')) {
    document.querySelector('head')?.appendChild(lightModeCss);
  } else {
    document.querySelector('head')?.removeChild(lightModeCss);
  }
};

export const addLightModeButton = async () => {
  const lightModeButton = document.createElement('button');
  lightModeButton.classList.add('lightModeBtn');
  lightModeButton.innerText = `Set ${
    (await isLightMode()) ? 'Dark' : 'Light'
  } Mode On`;
  document.querySelector('head')?.appendChild(lightModeButtonCss);

  lightModeButton.addEventListener('click', async () => {
    if ((await isLightMode()) && JSON.parse((await isLightMode()) || '')) {
      chrome.storage.local.set({ isLightMode: 'false' });
      lightModeButton.innerText = `Set Light Mode On`;
    } else {
      chrome.storage.local.set({ isLightMode: 'true' });
      lightModeButton.innerText = `Set Dark Mode On`;
    }
    setLightMode();
  });

  return new Promise((resolve, _reject) => {
    let profile: HTMLElement | null = null;
    const time = setInterval(() => {
      profile = document.querySelector('ul[data-testid=account-dropdown-list');
      if (profile) {
        clearInterval(time);
        profile.appendChild(lightModeButton);
        resolve(lightModeButton);
      }
    }, 1000);
  });
};
