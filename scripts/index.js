const popupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseEditButton = popupEdit.querySelector('.popup__close');
const popupCloseAddButton = popupAdd.querySelector('.popup__close');
const elements = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const popupPhoto = document.querySelector('.popup_photo');
const popupCloseImage = popupPhoto.querySelector('.popup__close');
const popupImage = document.querySelector('.popup__image');
const popupEditForm = popupEdit.querySelector('.popup__form');
const popupAddForm = popupAdd.querySelector('.popup__form');
const popupAll = document.querySelectorAll('.popup');
const popupSave = document.querySelector('.popup__save_add');

const nameInput = popupEditForm.querySelector('#name');
const descriptionInput = popupEditForm.querySelector('#description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addNameInput = popupAddForm.querySelector('#cardName');
const addLinkInput = popupAddForm.querySelector('#link');
const popupCaption = document.querySelector('.popup__caption');

function openPopup(popup){
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
    createCard(obj);
    closePopup(popupAdd);
    popupAddForm.reset();
}

function deleteCard(evt) {
    evt.target.closest('.element').remove();
}

function toggleLike(evt) {
    evt.target.classList.toggle('element__like_active')
}

function getCard(item) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__text');
    const deleteButton = cardElement.querySelector('.element__trash');
    const likeButton = cardElement.querySelector('.element__like');

    cardTitle.textContent = item.name;
    cardImage.src = item.link;
    cardImage.alt = item.name;

    deleteButton.addEventListener('click',deleteCard);
    likeButton.addEventListener('click', toggleLike);

    cardImage.addEventListener('click', () => {
        popupImage.src = item.link;
        popupCaption.textContent = item.name;
        popupImage.alt = item.name;
        openPopup(popupPhoto)
    });

    return cardElement;
}

function createCard(card) {
    const cardElement = getCard(card)
    elements.prepend(cardElement);
}

initialCards.forEach(createCard);

popupAddButton.addEventListener('click', () => {
    disableButton(popupSave);
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