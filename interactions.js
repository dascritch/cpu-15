'use strict';var post_remember_str="Se rappeler de moi",html_element=null,comment_form=null,article_player=null,header_player=null,rotate_placeholder={list:"hacker;serveur;startup;php;graphisme;fablab;meetup;d\u00e9mo;mat\u00e9riel;pro;apprendre;bug;festival;antivirus;couleur;cdkey;son;c\u0335r\u0335y\u0335p\u0335t\u0335e\u0335r\u0335 chiffrer;Eug\u00e8ne;emploi;r\u00e9seau;blog".split(";"),count:0,delay:2E3,element:null,change:function(){this.count=this.count===this.list.length-1?0:++this.count;
this.element.placeholder=this.list[this.count]},run:function(){this.element=document.getElementById("q");window.setInterval(this.change.bind(this),this.delay)}};function scroll_go_to_top(){window.scrollTo({top:0,left:0,behavior:"smooth"})}
function add_scroll_listeners(){function a(a){return function(b){b[0].isIntersecting?document.body.classList.remove(a):document.body.classList.add(a)}}document.getElementById("gotop").addEventListener("click",scroll_go_to_top);(new IntersectionObserver(a("scrolled"))).observe(document.getElementById("menu"));article_player&&(new IntersectionObserver(a("delegated"))).observe(article_player)}
function fix_focus_on_search_box(){"search"===location.hash.substr(1)&&document.getElementById("q").focus()}function main(){html_element=document.querySelector("html");header_player=document.getElementById("header-control");article_player=document.querySelector("cpu-audio");add_scroll_listeners();window.addEventListener("hashchange",fix_focus_on_search_box);rotate_placeholder.run()}document.body&&document.querySelector("cpu-controller")?main():window.addEventListener("DOMContentLoaded",main);
