import { addLightModeButton } from './lightMode/lightMode';

const addPointer = (): Promise<HTMLVideoElement> => {
  return new Promise((resolve, _reject) => {
    let video: HTMLVideoElement | null = null;
    const time = setInterval(() => {
      video = document.querySelector('video');
      if (video) {
        clearInterval(time);
        video.style.cursor = 'pointer';
        resolve(video);
      }
    }, 1000);
  });
};

const addHoverToDots = (): Promise<NodeListOf<HTMLElement>> => {
  return new Promise((resolve, _reject) => {
    let dots: NodeListOf<HTMLElement> | null = null;
    const time = setInterval(() => {
      dots = document.querySelectorAll('ul.slick-dots > li > button');
      if (dots.length) {
        clearInterval(time);
        dots.forEach((dot) => {
          dot.classList.add('dot');
        });
        resolve(dots);
      }
    }, 1000);
  });
};

if (window.location.pathname.includes('video')) {
  addPointer();
}

if (window.location.pathname.includes('home')) {
  addHoverToDots();
  addLightModeButton();
}
