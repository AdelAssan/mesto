
import {popupCaption, popupImage} from "./constants.js"

export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const CardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
        console.log(CardElement)
        return CardElement
    }

    createCard() {
        this._element = this._getTemplate();
        this._cardTitle = this._element.querySelector('.element__text');
        this._cardImage = this._element.querySelector('.element__image');

        this._cardTitle.textContent = this._data.name;
        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;

        this._getCard();

        return this._element
    }

    _handlePicture = () => {
    popupImage.src = this._data.link;
    popupCaption.textContent = this._data.name;
    popupImage.alt = this._data.name;

    this._handleCardClick(this._data.name, this._data.link);
}

    _deleteCard = (evt) => {
        evt.target.closest('.element').remove();
    }

    _toggleLike = (evt) => {
        evt.target.classList.toggle('element__like_active');
    }

    _getCard() {

        this._cardImage.addEventListener('click', () => {
            this._handlePicture();
        });

        this._element.querySelector('.element__trash').addEventListener('click', (evt) => {
            this._deleteCard(evt);
        });
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._toggleLike(evt);
        });
    }
}

