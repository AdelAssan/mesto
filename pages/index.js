import FormValidator from "../scripts/FormValidator.js";
import Card from "../scripts/Card.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import "./index.css";
import {
    config, descriptionInput, elementsSelector,
    initialCards, nameInput, popupAdd, popupAddButton,
    popupAddForm, popupEdit, popupEditButton, popupEditForm,
} from "../scripts/constants.js";

const editFormValidator = new FormValidator(config, popupEditForm);
const addFormValidator = new FormValidator(config, popupAddForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const openImagePopup = new PopupWithImage(document.querySelector('.popup_photo'));

function handleCardClick(name, link) {
    openImagePopup.openPopup(name, link);
    openImagePopup.setEventListeners();
}

function createCardElement(item) {
    const card = new Card(item, '.template', handleCardClick);
    const cardElement = card.createCard()

    return cardElement
}


const renderCard = (cardEl) => {

    const cardItem = createCardElement(cardEl)
    //elements.prepend(cardItem);
    return cardItem
};

const CardList = new Section({items: initialCards, renderer: renderCard}, elementsSelector);
CardList.renderItems();

const userInfo = new UserInfo({userName: '.profile__name', userDescription: '.profile__description'});

const PopupWithEditForm = new PopupWithForm(popupEdit, (data) => {
    userInfo.setUserInfo(data.name, data.description);
});

PopupWithEditForm.setEventListeners();

popupEditButton.addEventListener('click', () => {
    const {name, description} = userInfo.getUserInfo();
    nameInput.value = name;
    descriptionInput.value = description;

    PopupWithEditForm.openPopup()
});

const PopupWithAddForm = new PopupWithForm(popupAdd,({name, description}) => {
    const data = {
        name: name,
        link: description
    }

    CardList.addItem(renderCard(data));
       popupAddForm.reset();
});

PopupWithAddForm.setEventListeners();

popupAddButton.addEventListener('click', () => {
    addFormValidator.disableButton();
    PopupWithAddForm.openPopup();
});
