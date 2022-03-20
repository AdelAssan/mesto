import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import "./index.css";
import {api} from "../components/Api.js";
import {
    config, descriptionInput, elementsSelector,
    popupDelete, nameInput, popupAdd, popupAddButton, popupAvatar,
    popupAddForm, popupEdit, popupEditButton, popupEditForm, popupAvatarForm
} from "../utils/constants.js";

//Api
let userId

api.getProfile()
    .then(res => {
        userInfo.setUserInfo(res);
        userId = res._id;
        console.log(userId)
    })

api.getInitialCards()
    .then(items => {
        items.forEach(data => {
            const cardE = createCardElement({
                name: data.name,
                link: data.link,
                likes: data.likes,
                id: data._id,
                userId: userId,
                ownerId: data.owner._id
            })
            cardList.getItem(cardE)
        })
    })

//popupAdd
const addFormValidator = new FormValidator(config, popupAddForm);
addFormValidator.enableValidation();

function createCardElement(item) {
    const card = new Card(item, '.template', handleCardClick, (id) => {
        popupDeleteCard.openPopup();
        popupDeleteCard.changeSubmit(() => {
            popupDeleteCard.renderLoading(true);
            api.deleteCard(id)
                .then(res => {
                    card.deleteCardElement()
                }).finally(() => {
                popupDeleteCard.renderLoading(false);
            })
        })
    },
        (id) => {
        if(card.wasLiked()) {
            api.deleteLike(id)
                .then(res => {
                    card.setLikes(res.likes);
                });
        } else {
            api.addLike(id)
                .then(res => {
                    card.setLikes(res.likes);
                })
        }
        })
    const cardElement = card.createCard()
    return cardElement
}

const cardList = new Section({items: [], renderer: createCardElement}, elementsSelector);
cardList.renderItems();

const popupWithAddForm = new PopupWithForm(popupAdd,(data) => {
    popupWithAddForm.renderLoading(true);
    api.addCard(data.name, data.description, data.likes)
        .then(res => {
            console.log('res', res)
            const card = ({
                name: res.name,
                link: res.link,
                likes: res.likes,
                id: res._id,
                userId: userId,
                ownerId: res.owner._id
            })
            cardList.addItem(createCardElement(card));
            popupWithAddForm.closePopup();
        }).finally(() => {
        popupWithAddForm.renderLoading(false);
    })
});

popupWithAddForm.setEventListeners();

popupAddButton.addEventListener('click', () => {
    addFormValidator.resetValidation();
    popupWithAddForm.openPopup();
});

//popupEdit
const editFormValidator = new FormValidator(config, popupEditForm);
editFormValidator.enableValidation();

const userInfo = new UserInfo({
    userName: '.profile__name',
    userDescription: '.profile__description', userAvatar: '.profile__photo'});

const popupWithEditForm = new PopupWithForm(popupEdit, (data) => {
    const {name, description} = data;
    popupWithEditForm.renderLoading(true);
    api.editProfile(name, description)
        .then(res => {
            userInfo.setUserInfo(res);
            popupWithEditForm.closePopup();
        }).finally(() => {
        popupWithEditForm.renderLoading(false);
    });
});

popupWithEditForm.setEventListeners();

popupEditButton.addEventListener('click', () => {
    const {name, description} = userInfo.getUserInfo();

    nameInput.value = name;
    descriptionInput.value = description;

    editFormValidator.resetValidation();
    popupWithEditForm.openPopup()
});

//popupImage
const openImagePopup = new PopupWithImage(document.querySelector('.popup_photo'));

function handleCardClick(name, link) {
    openImagePopup.openPopup(name, link);
}

openImagePopup.setEventListeners();

//popupDeleteCard
const popupDeleteCard = new PopupWithForm(popupDelete);
popupDeleteCard.setEventListeners();

//popupAvatar
const avatarFormValidator = new FormValidator(config, popupAvatarForm);
avatarFormValidator.enableValidation();

const popupEditAvatar = new PopupWithForm(popupAvatar, (data) => {
    const {avatar} = data;
    popupEditAvatar.renderLoading(true);
    api.changeAvatar(avatar)
        .then(res => {
            console.log(res)
            userInfo.setUserInfo(res);
            popupEditAvatar.closePopup();
        }).finally(() => {
        popupEditAvatar.renderLoading(false);
    });
});

document.querySelector('.profile__photo').addEventListener('click', () => {
    avatarFormValidator.resetValidation();
    popupEditAvatar.openPopup();
});

popupEditAvatar.setEventListeners();




