export default class Card {
    constructor(data, cardSelector, handleCardClick, handleCardDelete, handleLikeClick) {
        this._data = data;
        this._likes = data.likes;
        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;

        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleLikeClick = handleLikeClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
        return cardElement
    }

    createCard() {
        this._element = this._getTemplate();
        this._cardTitle = this._element.querySelector('.element__text');
        this._cardImage = this._element.querySelector('.element__image');
        this._likeCount = this._element.querySelector('.element__like-count');
        this._like = this._element.querySelector('.element__like');
        this._cardTitle.textContent = this._data.name;
        this._cardImage.src = this._data.link;
        this._cardImage.alt = this._data.name;

        this._getCard();
        this.setLikes(this._likes);

        if (this._ownerId !== this._userId) {
            this._element.querySelector('.element__trash').style.display = 'none'
        }

        return this._element
    }

    _handlePicture = () => {
    this._handleCardClick(this._data.name, this._data.link);
}

    wasLiked() {
        const myLike= this._likes.find(user => user._id === this._userId);
        return myLike
    }

    setLikes(newLikes) {
        this._likes = newLikes;
        this._likeCount.textContent = this._likes.length;

        if (this.wasLiked()) {
            this._addLike()
        }else{
            this._removeLike()
        }
    }

    _addLike = () => {
        this._like.classList.add('element__like_active');
    }

    _removeLike = () => {
        this._like.classList.remove('element__like_active');
    }

    deleteCardElement = () => {
        this._element.remove();
    }

    _getCard() {
        this._cardImage.addEventListener('click', () => {
            this._handlePicture();
        });
        this._element.querySelector('.element__trash').addEventListener('click', () => {
            this._handleCardDelete(this._id);
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeClick(this._id);
        });
    }
}

