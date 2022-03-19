export default class UserInfo {
    constructor({userName, userDescription, userAvatar}) {
        this._userName = document.querySelector(userName);
        this._userDescription = document.querySelector(userDescription);
        this._userAvatar = document.querySelector(userAvatar);
    }

    getUserInfo() {
        const userInformation = {};

        userInformation.name = this._userName.textContent;
        userInformation.description = this._userDescription.textContent;

        return userInformation;
    }

    setUserInfo(name, description, avatar) {
        this._userName.textContent = name;
        this._userDescription.textContent = description;
        this._userAvatar.src = avatar;
    }
}