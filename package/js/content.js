document.addEventListener('contextmenu', (event) => {
  clickedEl = event.target;
}, true);

chrome.runtime.onMessage.addListener((request) => {
  const src = clickedEl.src
  if (request === 'getClickedEl' && src) {
    const createPage = window.open('https://lgtm.party/extension/invite')
    window.addEventListener('message', (event) => {
      if (event.data.loaded === true) {
        createPage.postMessage({ src }, 'https://lgtm.party');
      }
    });
  }
});
