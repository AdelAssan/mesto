// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const hasInvalidInput = (inputs) => {
    return Array.from(inputs).some((elem) => !elem.validity.valid);
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
    if (hasInvalidInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(inactiveButtonClass);
        button.disabled = false;
    }
}

const disableButton = (button) => {
   button.setAttribute('disabled', true);
   button.classList.add('popup__save_disabled');
}

function showError(input, errorContainer, errorText, { inputErrorClass, errorClass }) {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorClass);
    errorContainer.textContent = errorText;
}

function hideError(input, errorContainer, { inputErrorClass, errorClass }) {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorClass);
    errorContainer.textContent = '';
}

function validateInput(form, input, {inputErrorClass, errorClass}) {
    const errorContainer = form.querySelector(`#error-${input.id}`);

    let isValid = input.validity.valid;
    let errorText = input.validationMessage;

    if (isValid) {
        hideError(input, errorContainer, {inputErrorClass, errorClass});
    } else {
        showError(input, errorContainer, errorText, {inputErrorClass, errorClass});
        input.classList.add(inputErrorClass);
        errorContainer.classList.add(errorClass);
        errorContainer.textContent = errorText;
    }
}

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
    const inputs = form.querySelectorAll(inputSelector);
    const submitButton = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            validateInput(form, input, rest);
            toggleButtonError(inputs, submitButton,inactiveButtonClass);
        });
    });
    toggleButtonError(inputs, submitButton,inactiveButtonClass);
}

function enableValidation ({formSelector, ...rest}){
    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        setInputListeners(form, rest);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error_visible',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled'
});