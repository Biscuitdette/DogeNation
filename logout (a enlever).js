function doesHttpOnlyCookieExist(cookiename){var d=new Date();d.setTime(d.getTime()+(1000));var expires="expires="+d.toUTCString();document.cookie=cookiename+"=new_value;path=/;"+expires;return document.cookie.indexOf(cookiename+'=')==-1;}
var logout=document.getElementsByClassName("u-image u-image-round u-preserve-proportions u-radius-10 u-image-2")[0]
var signup=document.getElementsByClassName("u-align-right-lg u-align-right-md u-align-right-sm u-align-right-xs u-border-2 u-border-custom-color-6 u-border-hover-custom-color-6 u-btn u-btn-round u-button-style u-custom-font u-font-montserrat u-gradient u-hover-custom-color-1 u-none u-radius-50 u-btn-1")[0]
var login=document.getElementsByClassName("u-align-center u-border-2 u-border-custom-color-1 u-border-hover-custom-color-2 u-btn u-btn-round u-button-style u-custom-color-6 u-custom-font u-font-montserrat u-hover-grey-90 u-radius-50 u-btn-2")[0]
logout.style.visibility="hidden"
signup.style.visibility="hidden"
login.style.visibility="hidden"
const loggedIn=doesHttpOnlyCookieExist("token")
if(loggedIn)logout.addEventListener("click",function(){$.post("https://eclipsehub.xyz/logout",function(data){if(data.success)window.location="https://eclipsehub.xyz"})})
login.style.visibility=loggedIn?"hidden":"visible";signup.style.visibility=loggedIn?"hidden":"visible";logout.style.visibility=loggedIn?"visible":"hidden";