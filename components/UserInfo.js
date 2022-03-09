export default class UserInfo {
    constructor({userName, userDescription}) {
        this._userName = document.querySelector(userName);
        this._userDescription = document.querySelector(userDescription);
    }

    getUserInfo() {
        const userInformation = {};

        userInformation.name = this._userName.textContent;
        userInformation.description = this._userDescription.textContent;

        return userInformation;
    }

    setUserInfo(name, description) {
        this._userName.textContent = name;
        this._userDescription.textContent = description;
    }
}