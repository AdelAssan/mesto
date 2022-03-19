export const initialCards = [
    {
        name: 'Заилийский Алатау',
        link: 'https://cdn.pixabay.com/photo/2017/09/07/22/31/kazakhstan-2726987_960_720.jpg'
    },
    {
        name: 'Алтын-Емель',
        link: 'https://cdn.pixabay.com/photo/2021/07/16/17/37/altyn-emel-national-park-6471450_960_720.jpg'
    },
    {
        name: 'Чарынский каньон',
        link: 'https://images.unsplash.com/photo-1607644546432-45b4e524dd3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80'
    },
    {
        name: 'Астана',
        link: 'https://images.unsplash.com/photo-1611474494831-363035161328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1218&q=80'
    },
    {
        name: 'Большое Алматинское озеро',
        link: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80'
    },
    {
        name: 'Медео',
        link: 'https://st2.depositphotos.com/1736422/5819/i/600/depositphotos_58190783-stock-photo-medeo-medeu-rink-in-almaty.jpg'
    }
];

export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled'
}

export const popupEditButton = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_edit');
export const popupAdd = document.querySelector('.popup_add');
export const popupAvatar = document.querySelector('.popup_edit-avatar');
export const popupDelete = document.querySelector('.popup_delete-card');
export const popupAddButton = document.querySelector('.profile__add-button');
export const elementsSelector ='.elements';
export const popupEditForm = popupEdit.querySelector('.popup__form');
export const popupAddForm = popupAdd.querySelector('.popup__form');
export const popupAvatarForm = popupAvatar.querySelector('.popup__form');
export const nameInput = popupEditForm.querySelector('#name');
export const descriptionInput = popupEditForm.querySelector('#description');
export const avatarInput = popupAvatarForm.querySelector('#avatar');

