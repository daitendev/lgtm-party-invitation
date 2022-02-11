chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'lgtm-party-invitation-menu',
    title: 'Invite to LGTM.party',
    contexts: ['image']
  });
});

chrome.contextMenus.onClicked.addListener((_, tab) => {
  chrome.tabs.sendMessage(tab.id, 'getClickedEl');
});
