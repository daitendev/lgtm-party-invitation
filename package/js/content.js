chrome.runtime.onMessage.addListener((request) => {
  const { cmd, src } = request;
  if (cmd === 'captureImageSrc' && src) {
    const createPage = window.open('https://lgtm.party/create#invite', '_blank')
    window.addEventListener('message', (event) => {
      if (event.data.loaded === true) {
        createPage.postMessage({ src }, 'https://lgtm.party');
      }
    });
  }
});
