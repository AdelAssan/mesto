const popupEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const elements = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const popupAdd = document.querySelector('.popup_add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupCloseEditButton = popupEdit.querySelector('.popup__close');
const popupCloseAddButton = popupAdd.querySelector('.popup__close');

let popupEditForm = popupEdit.querySelector('.popup__form');
let nameInput = popupEditForm.querySelector('#name');
let descriptionInput = popupEditForm.querySelector('#description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupAddForm = popupAdd.querySelector('.popup__form');
let addNameInput = popupAddForm.querySelector('#cardName');
let addLinkInput = popupAddForm.querySelector('#link');

function openPopup() {
    popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
}

function closePopup() {
    popupEdit.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closePopup();
}

function openPopupAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_opened');
    document.getElementById('cardName').value = "";
    document.getElementById('link').value = "";
}

function formAddSubmit(evt) {
    evt.preventDefault();

    const obj = {
        name: addNameInput.value,
        link: addLinkInput.value
    }

    createCard(obj);
    closePopupAdd();
}

function createCard(card) {
    const cardElement = template.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__text');
    const likeButton = cardElement.querySelector('.element__like');
    //const deleteButton = cardElement.querySelector('');

    cardTitle.textContent = card.name;
    cardImage.src = card.link;

    elements.prepend(cardElement);
}

initialCards.forEach(createCard);

popupEditButton.addEventListener('click', openPopup);
popupCloseEditButton.addEventListener('click', closePopup);
popupEditForm.addEventListener('submit', formSubmitHandler);
popupAddButton.addEventListener('click', openPopupAdd);
popupCloseAddButton.addEventListener('click', closePopupAdd);
popupAddForm.addEventListener('submit', formAddSubmit);