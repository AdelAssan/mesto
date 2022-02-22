export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    }
];

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled'
}

export const popupCaption = document.querySelector('.popup__caption');
export const popupPhoto = document.querySelector('.popup_photo');
export const popupImage = document.querySelector('.popup__image');

export const popupEditButton = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupAddButton = document.querySelector('.profile__add-button');
export const popupCloseEditButton = popupEdit.querySelector('.popup__close');
export const popupCloseAddButton = popupAdd.querySelector('.popup__close');
export const elements = document.querySelector('.elements');
export const template = document.querySelector('.template').content;
export const popupCloseImage = popupPhoto.querySelector('.popup__close');
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const popupAddForm = popupAdd.querySelector('.popup__form');
export const popupAll = document.querySelectorAll('.popup');
export const nameInput = popupEditForm.querySelector('#name');
export const descriptionInput = popupEditForm.querySelector('#description');
export const profileName = document.querySelector('.profile__name');
export const profileDescription = document.querySelector('.profile__description');
export const addNameInput = popupAddForm.querySelector('#cardName');
export const addLinkInput = popupAddForm.querySelector('#link');

