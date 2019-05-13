"use strict";
/* jshint esversion: 6, strict: global, laxbreak: true */
/* globals chrome, document, md5 */
// licensed under the MPL 2.0 by (github.com/serv-inc)

const ALLOW = RegExp('(moz|chrome)-extension://');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if ( tab.url && isBanned(getHost(tab.url)) ) {
    if ( ! ALLOW.test(tab.url) ) {
      chrome.tabs.update(tabId,
		         {'url': chrome.extension.getURL('blockpage.html')
                          + '?' + encodeURIComponent(tab.url)});
    }
  }
});


function getHost(url) {
  var a = document.createElement("a");
  a.href = url;
  return a.hostname;
}

/** @return True if hostname's hash is in BANNED */
function isBanned(host) {
  var hashval = md5(host);
  return BANNED.indexOf(hashval) !== -1;
}

const BANNED=[//"d6f16a08c9098fbfc258f50bae1dfe09", // hash of "p.p" for testing
"081a74595f90ee12c9885f8022919351",
"120bdb07b34c6597742c090cabe63d8f",
"220e79b001eced4cf4de996641b9ed98",
"2b414e626d3369a3cbc09db841e4ad75",
"7fa9d731110fb509a959ae3fc92e6f12",
"a6be66d3b989948b5e056d8f3127c477",
"cb7cb819b971c81380255caa55a3e3d4",
"f9ff5c6d6df78cd4ec9592b82e0e18cd"
];
