function setValid(a){a.onfocus=function(){a.setCustomValidity("")}}function checkValid(a){a.onblur=function(){a.value||a.setCustomValidity("Invalid field.")}}var link=document.querySelector(".contacts__button"),popup=document.querySelector(".letter-popup"),close=popup.querySelector(".popup__close"),form=popup.querySelector(".letter-form"),username=popup.querySelector(".letter-form__field--name"),email=popup.querySelector(".letter-form__field--email"),letterText=popup.querySelector(".letter-form__field--text");link.addEventListener("click",function(a){a.preventDefault(),popup.classList.add("popup-show"),username.focus()}),close.addEventListener("click",function(a){a.preventDefault(),popup.classList.remove("popup-show"),username.setCustomValidity(""),email.setCustomValidity(""),letterText.setCustomValidity("")}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("popup-show")&&(popup.classList.remove("popup-show"),username.setCustomValidity(""),email.setCustomValidity(""),letterText.setCustomValidity("")))}),form.addEventListener("submit",function(a){username.value&&password.value&&letterText.value||a.preventDefault()}),setValid(username),setValid(email),setValid(letterText),checkValid(username),checkValid(email),checkValid(letterText);var mapLink=document.querySelector(".contacts__map-link"),mapPopup=document.querySelector(".map-popup"),mapClose=mapPopup.querySelector(".popup__close");mapLink.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.add("popup-show")}),mapClose.addEventListener("click",function(a){a.preventDefault(),mapPopup.classList.remove("popup-show")}),window.addEventListener("keydown",function(a){27===a.keyCode&&mapPopup.classList.contains("popup-show")&&(a.preventDefault(),mapPopup.classList.remove("popup-show"))});