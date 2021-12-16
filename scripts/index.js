const popupEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

function closePopupOnOverlayClick(event) {
    if (event.target === event.currentTarget) {
    popup.classList.remove('popup_opened')
    }
}

popupEditButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopupOnOverlayClick);

// Находим форму в DOM
let formElement = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__form');

// Находим поля формы в DOM
    let nameInput = popupForm.querySelector('.popup__name');
    let descriptionInput = popupForm.querySelector('.popup__description');
    let saveForm = popup.querySelector('.popup__save');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    function formSubmitHandler (evt) {
        evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
        // Так мы можем определить свою логику отправки.
        // О том, как это делать, расскажем позже.
        let profileName = document.querySelector('.profile__name');
        let profileDescription = document.querySelector('.profile__description');

        // Получите значение полей jobInput и nameInput из свойства value
        profileName.textContent = nameInput.value;
        profileDescription.textContent =descriptionInput.value;
    }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
saveForm.addEventListener('click', formSubmitHandler);
saveForm.addEventListener('click',formSubmitHandler);
saveForm.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);