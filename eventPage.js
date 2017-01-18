require(['lib/event'], function () {

  chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
      if(tab !== undefined) {
        chrome.storage.local.set({tab: tab.url});
      }
    });
  });

  chrome.runtime.onInstalled.addListener(function () {
    var menuItenId = 'gen_qrcode';
    chrome.contextMenus.create({
      id: menuItenId,
      type: 'normal',
      title: '生成二维码',
      contexts: ['selection', 'link', 'image', 'video', 'audio']
    });
  });

  chrome.contextMenus.onClicked.addListener(function (info, tab) {

    if(info.menuItemId === 'gen_qrcode') {
      if(info.selectionText) {
        chrome.storage.local.set({context: info.selectionText});
      } else if(info.srcUrl) {

      } else if(info.linkUrl) {

      } else {

      }

    }
  });

});

