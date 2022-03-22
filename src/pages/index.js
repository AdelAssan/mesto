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

Promise.all([api.getProfile(), api.getInitialCards()])
    .then(([userData, cardsData]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);

        console.log(cardList)
        cardList.renderItems(cardsData);
    }).catch((err) => {
    console.log(err);
})

const cardList = new Section({
    items: [], renderer: (data) => {
        cardList.getItem(createCardElement({
            name: data.name,
            link: data.link,
            likes: data.likes,
            id: data._id,
            userId: userId,
            ownerId: data.owner._id
        }))
    }
}, elementsSelector);

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
                        popupDeleteCard.closePopup();
                    }).catch((err) => {
                    console.log(err);
                }).finally(() => {
                    popupDeleteCard.renderLoading(false);
                })
            })
        },
        (id) => {
            if (card.wasLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        card.setLikes(res.likes);
                    }).catch((err) => {
                    console.log(err);
                });
            } else {
                api.addLike(id)
                    .then(res => {
                        card.setLikes(res.likes);
                    }).catch((err) => {
                    console.log(err);
                })
            }
        })
    const cardElement = card.createCard()
    return cardElement
}


const popupWithAddForm = new PopupWithForm(popupAdd, (data) => {
    popupWithAddForm.renderLoading(true);
    api.addCard(data.name, data.description, data.likes)
        .then(res => {
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
        }).catch((err) => {
        console.log(err);
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
    userDescription: '.profile__description', userAvatar: '.profile__photo'
});

const popupWithEditForm = new PopupWithForm(popupEdit, (data) => {
    const {name, description} = data;
    popupWithEditForm.renderLoading(true);
    api.editProfile(name, description)
        .then(res => {
            userInfo.setUserInfo(res);
            popupWithEditForm.closePopup();
        }).catch((err) => {
        console.log(err);
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
    popupEditAvatar.renderLoading(true);
    const {avatar} = data;
    api.changeAvatar(avatar)
        .then(res => {
            userInfo.setUserInfo(res);
            popupEditAvatar.closePopup();
        }).catch((err) => {
        console.log(err);
    }).finally(() => {
        popupEditAvatar.renderLoading(false);
    });
});

document.querySelector('.profile__photo-button').addEventListener('click', () => {
    avatarFormValidator.resetValidation();
    popupEditAvatar.openPopup();
});

popupEditAvatar.setEventListeners();




