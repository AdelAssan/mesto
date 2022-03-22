export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._popupCloseButton = 'popup__close';
        this._handleEscClosePopup = this._handleEscClose.bind(this);
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClosePopup);
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClosePopup);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.closePopup()
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', evt => {
            this._handleOverlayClose(evt)
            if (evt.target.classList.contains(this._popupCloseButton)) {
                this.closePopup()
            }
        });
    }
}