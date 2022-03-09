export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupCloseButton = 'popup__close';
        this._handleEscClosePopup = this._handleEscClose.bind(this);
    }

    openPopup() {
        this._popupSelector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClosePopup);
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClosePopup);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')){
            this.closePopup()
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('mousedown', evt => {
            this._handleOverlayClose(evt)
            if (evt.target.classList.contains(this._popupCloseButton)) {
                this.closePopup()
            }
        });
    }
}