class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers,
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }

    changeAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        })
            .then(res => res.ok ? res.json() : Promise.reject(res.status))
            .catch((err) => { console.log(err)})
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
        authorization: '0ae9ad10-4d99-4e22-9605-8b12206f4940',
        'Content-Type': 'application/json'
    }
});