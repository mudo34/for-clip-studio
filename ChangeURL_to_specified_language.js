// ==UserScript==
// @name        CLIP STUDIO ASSETS 指定言語でページを開く
// @namespace   Violentmonkey Scripts
// @match       https://assets.clip-studio.com/*
// @grant       none
// @version     1.0
// @author      mudo34
// @description CLIP STUDIO ASSETS サイト内で指定言語以外のURLを表示した時無理矢理指定言語に変更します
// @run-at document-start
// @noframes
// ==/UserScript==

  let csalj_jump = "ja-jp"; // Want to display "Country-Language"

  let csalj_url  = location.href;
  let csalj_lang = csalj_url.match(/\/(\w{2}\-\w{2})/);

  if(csalj_lang && csalj_lang[1] != csalj_jump){
    let csalj_jump_url = csalj_url.replace(csalj_lang[1], csalj_jump);
    history.replaceState(null, "CSALJ", csalj_jump_url);
    location.href = csalj_jump_url;
  }
