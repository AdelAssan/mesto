export default class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;

        this._inputs = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
        this._submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    }

    _hasInvalidInput = () => {
        return this._inputs.some((input) => {
            return !input.validity.valid
        });
    }

    _toggleButtonError = () => {
        if (this._hasInvalidInput()) {
            this.disableButton();
        } else {
            this._submitButton.classList.remove(this._settings.inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    disableButton = () => {
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    resetValidation() {
        this._toggleButtonError();

        this._inputs.forEach((input) => {
            this._hideError(input)
        });

    }

    _showError(input, errorContainer, errorText) {
        input.classList.add(this._settings.inputErrorClass);
        errorContainer.textContent = errorText;
    }

    _hideError(input) {
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        input.classList.remove(this._settings.inputErrorClass);
        errorContainer.textContent = '';
    }

    _validateInput = (input) => {
        const errorContainer = this._form.querySelector(`#error-${input.id}`);
        const isValid = input.validity.valid;
        const errorText = input.validationMessage;

        if (isValid) {
            this._hideError(input, errorContainer);
        } else {
            this._showError(input, errorContainer, errorText);
        }
    }

    _setInputListeners() {
        this._inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._validateInput(input);
                this._toggleButtonError();
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        this._setInputListeners();
    }

}



