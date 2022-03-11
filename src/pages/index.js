import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import {
    config, descriptionInput, elementsSelector,
    initialCards, nameInput, popupAdd, popupAddButton,
    popupAddForm, popupEdit, popupEditButton, popupEditForm,
} from "../utils/constants.js";

const editFormValidator = new FormValidator(config, popupEditForm);
const addFormValidator = new FormValidator(config, popupAddForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const openImagePopup = new PopupWithImage(document.querySelector('.popup_photo'));

function handleCardClick(name, link) {
    openImagePopup.openPopup(name, link);
}

openImagePopup.setEventListeners();

function createCardElement(item) {
    const card = new Card(item, '.template', handleCardClick);
    const cardElement = card.createCard()

    return cardElement
}

const cardList = new Section({items: initialCards, renderer: createCardElement}, elementsSelector);
cardList.renderItems();

const userInfo = new UserInfo({userName: '.profile__name', userDescription: '.profile__description'});

const popupWithEditForm = new PopupWithForm(popupEdit, (data) => {
    userInfo.setUserInfo(data.name, data.description);
});

popupWithEditForm.setEventListeners();

popupEditButton.addEventListener('click', () => {
    const {name, description} = userInfo.getUserInfo();
    nameInput.value = name;
    descriptionInput.value = description;

    editFormValidator.resetValidation();
    popupWithEditForm.openPopup()
});

const popupWithAddForm = new PopupWithForm(popupAdd,({name, description}) => {
    const data = {
        name: name,
        link: description
    }

    cardList.addItem(createCardElement(data));
});

popupWithAddForm.setEventListeners();

popupAddButton.addEventListener('click', () => {
    addFormValidator.resetValidation();
    popupWithAddForm.openPopup();
});
