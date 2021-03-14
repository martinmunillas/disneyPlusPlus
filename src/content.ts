const addPointer = (): Promise<HTMLVideoElement> => {
  return new Promise((resolve, _reject) => {
    let video: HTMLVideoElement | null = null;
    const time = setInterval(() => {
      video = document.querySelector('video');
      if (video) {
        video.style.cursor = 'pointer';
        clearInterval(time);
        resolve(video);
      }
    }, 1000);
  });
};

const setUpgrades = async () => {
  await addPointer();
  console.log(';)');
};

if (this.location.host.includes('disneyplus')) {
  if (this.location.pathname.includes('video')) {
    setUpgrades();
  }
}
