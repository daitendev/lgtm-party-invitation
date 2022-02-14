chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'lgtm-party-invitation-menu',
    title: 'Invite to LGTM.party',
    contexts: ['image']
  });
  for (const cs of chrome.runtime.getManifest().content_scripts) {
    for (const tab of await chrome.tabs.query({ url: cs.matches })) {
      if (!tab.url.startsWith('https://chrome.google.com/webstore')) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: cs.js,
        });
      }
    }
  }
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  chrome.tabs.sendMessage(tab.id, { cmd: 'captureImageSrc', src: item.srcUrl });
});
