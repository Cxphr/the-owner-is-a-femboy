import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './style.css'
import "preline/preline"
createApp(App).use(router).mount('#app')

$(document).ready(function(){
   
   var mousePos = {};
 
  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }
   
   $(window).mousemove(function(e) {
     mousePos.x = e.pageX;
     mousePos.y = e.pageY;
   });
   
   $(window).mouseleave(function(e) {
     mousePos.x = -1;
     mousePos.y = -1;
   });
   
   var draw = setInterval(function(){
     if(mousePos.x > 0 && mousePos.y > 0){
       
       var range = 1;
       
       var color = "background: rgb("+getRandomInt(0,200)+","+getRandomInt(25,175)+","+getRandomInt(50,255)+");";
       
       var sizeInt = getRandomInt(100, 100);
       size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
       
       var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
       
       var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
 
       var style = left+top+color+size;
       $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
     }
   }, 1);
 });
