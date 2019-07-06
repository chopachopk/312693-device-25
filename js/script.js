var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".letter-popup");
var close = popup.querySelector(".popup__close");

var form = popup.querySelector(".letter-form");
var username = popup.querySelector(".letter-form__field--name");
var email = popup.querySelector(".letter-form__field--email");
var letterText = popup.querySelector(".letter-form__field--text");

// Показать попап
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  username.focus();
});

// Закрыть попап по крестику + вернуть все поля в валидное состояние
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  username.setCustomValidity("");
  email.setCustomValidity("");
  letterText.setCustomValidity("");
});

// Закрыть попап по esc + вернуть все поля в валидное состояние
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        username.setCustomValidity("");
        email.setCustomValidity("");
        letterText.setCustomValidity("");
      }
    }
  });

// Проверка валидности формы при отправке
form.addEventListener("submit", function (evt) {
  if (!username.value || !password.value || !letterText.value) {
    evt.preventDefault();
  }
});

// Делаем поля валидными при фокусе на них
function setValid(field) {
  field.onfocus = function() {
    field.setCustomValidity("");
  }
}

setValid(username);
setValid(email);
setValid(letterText);

// Делаем поля невалидными, если при расфокусировке они остаются пустыми
function checkValid(field) {
  field.onblur = function() {
    if (!field.value) {
      field.setCustomValidity("Invalid field.");
    }
  };
}

checkValid(username);
checkValid(email);
checkValid(letterText);


var mapLink = document.querySelector(".contacts__map-link");

var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".popup__close");

// Показать попап
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

// Закрыть попап по крестику
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

// Закрыть попап по esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("popup-show");
    }
  }
});
