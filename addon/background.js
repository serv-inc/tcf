"use strict";
/* jshint esversion: 6, strict: global */
/* jshint laxbreak: true */
/* globals chrome */
/* globals document */
/* globals md5 */
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

const BANNED=["02d9e81803b1f68819b7748968bbec3b",
"d6f16a08c9098fbfc258f50bae1dfe09", // hash of "p.p" for testing, also see up
"06b8477effc8005b84c1a24c4e2d2793",
"081a74595f90ee12c9885f8022919351",
"1314c41591c5a7e2d33cb596f7b90896",
"15087594c3b0e52c8d54f5304cc7ec3f",
"21ac935c1e90efe82e29d4713f4258db",
"2b414e626d3369a3cbc09db841e4ad75",
"3d99b44bd87da556a1c596a7ab28b9a5",
"42c248ea0e93256bfc35f6db1477b751",
"4c5b42fa85b10cc38fc447021d95b589",
"60538dc94623543492479124f361bf74",
"64845e0dec8ab59e35fb42999ed7c561",
"790bf8229966ac6123e7d824711296f9",
"833a4f00b5b7899de5cd04546515a2ef",
"8945e049337dfb4f375de77c84ca9095",
"98971604de800d47789f28c4c287f8e4",
"9a40a9d84a8bedd3d97b9f3f8406db0f",
"cada2934366802dda0bb05f45ac31a2f",
"ce7cdcbbd16328dcade8aedf5a779995",
"f77df6c8a9131cb8aa457734ad45f9d6",
"f9e05a49b1c65b3b1f7daed40b42107c",
"f9ff5c6d6df78cd4ec9592b82e0e18cd"];
