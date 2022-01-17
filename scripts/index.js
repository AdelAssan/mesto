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

const nameInput = popupEditForm.querySelector('#name');
const descriptionInput = popupEditForm.querySelector('#description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const addNameInput = popupAddForm.querySelector('#cardName');
const addLinkInput = popupAddForm.querySelector('#link');
const popupCaption = document.querySelector('.popup__caption');

function openPopup(popup){
    popup.classList.add('popup_opened')
  }
  
  function closePopup(popup){
    popup.classList.remove('popup_opened')
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
    popupAddForm.reset();
    closePopup(popupAdd);
}

function deleteCard(evt) {
    evt.target.closest('.element').remove();
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

      likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('element__like_active')
      });

      cardImage.addEventListener('click', () => {
        openPopup(popupPhoto)
        popupImage.src = item.link;
        popupCaption.textContent = item.name;
        popupImage.alt = item.name;
      });

    return cardElement;
}

function createCard(card) {
    const cardElement = getCard(card)
    elements.prepend(cardElement);
}

initialCards.forEach(createCard);

popupAddButton.addEventListener('click', () => openPopup (popupAdd));
popupCloseAddButton.addEventListener('click', () => closePopup (popupAdd));

popupEditButton.addEventListener('click', () => {
  openPopup (popupEdit);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
});

popupCloseEditButton.addEventListener('click', () => closePopup (popupEdit));
popupCloseImage.addEventListener('click', () => {
    closePopup(popupPhoto)
  });

popupEditForm.addEventListener('submit', handlerEditForm);
popupAddForm.addEventListener('submit', handlerAddForm);