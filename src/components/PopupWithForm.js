import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);

        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._saveButton = this._popup.querySelector('.popup__save');
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    _getInputValues() {

        this._inputValue = {};
        this._inputList.forEach(input => {
            this._inputValue[input.name] = input.value;
        });

        return this._inputValue;
    }

    changeSubmit(newSubmit) {
        this._submitForm = newSubmit;
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._saveButton.textContent = "Сохранение...";
        } else {
            this._saveButton.textContent = document.querySelector('.popup__save').value;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }

    closePopup() {
        super.closePopup();
        this._form.reset();
    }
}