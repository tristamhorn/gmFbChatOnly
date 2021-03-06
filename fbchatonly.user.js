// ==UserScript==
// @name        Facebook Chat Only
// @namespace   com.tristamhorn.gmfbchatonly
// @description Hides everything except facebook chat.
// @match      *://www.facebook.com/*
// @version     1
// @grant       none
// ==/UserScript==

//document.getElementById('leftCol').remove();
//document.getElementById('contentCol').remove();

document.querySelectorAll('[role="main"]').forEach(function (el){
    el.remove();
});

document.querySelectorAll('[role="complementary"]').forEach(function (elm){
    elm.style.display = "none";
});
