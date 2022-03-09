import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);

        this._submitForm = submitForm;
        this._form = document.querySelector('.popup__form');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    _getInputValues() {

        this._inputValue = {};
        this._inputList.forEach(input => {
            this._inputValue[input.name] = input.value;
        });

        return this._inputValue;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log(this._getInputValues())
            this._submitForm(this._getInputValues());
            this.closePopup();
        });
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }
}