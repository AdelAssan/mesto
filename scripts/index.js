import {FormValidator} from "./FormValidator.js";
import {Card} from "./Card.js";
import {initialCards, config, popupAddForm, popupEditForm, popupSave,
nameInput, descriptionInput, popupAll, profileName, profileDescription,
popupEdit, popupAdd, addNameInput, addLinkInput, template, elements,
popupCloseAddButton, popupAddButton,popupEditButton, popupCloseImage,
popupCloseEditButton, popupPhoto} from "./constants.js";

const editFormValidator = new FormValidator(config, popupEditForm);
const addFormValidator = new FormValidator(config, popupAddForm);

editFormValidator.enableValidation();
addFormValidator.disableButton(popupSave);
addFormValidator.enableValidation();

export function openPopup(popup){
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc);
}

function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
}

popupAll.forEach((popup) => {
    popup.addEventListener('mousedown', (evt => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
    }))
});

function closeByEsc (evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup)
    }
}

function handlerEditForm(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup(popupEdit);
}

function handlerAddForm(evt) {
    evt.preventDefault();

    const obj = {
        name: addNameInput.value,
        link: addLinkInput.value
    }
    renderCard(obj);
    closePopup(popupAdd);
    popupAddForm.reset();
}

const renderCard = (data) => {
    const card = new Card(data, template)
    const cardItem = card.createCard()

    elements.prepend(cardItem);
};

initialCards.forEach((data) => {
    renderCard(data, elements);
})

popupAddButton.addEventListener('click', () => {
    openPopup (popupAdd);
});
popupCloseAddButton.addEventListener('click', () => closePopup (popupAdd));
popupEditButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    openPopup (popupEdit);
});
popupCloseEditButton.addEventListener('click', () => closePopup (popupEdit));
popupCloseImage.addEventListener('click', () => {
    closePopup(popupPhoto)
});

popupEditForm.addEventListener('submit', handlerEditForm);
popupAddForm.addEventListener('submit', handlerAddForm);

