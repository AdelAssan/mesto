export default class Section {
    constructor({items, renderer}, cardSelector) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._cards = document.querySelector(cardSelector);
    }

    renderItems(data) {
        this._renderedItems = data;
        this._renderedItems.forEach(item => {
        this._renderer(item);
       });
}

    addItem(item) {
        this._cards.prepend(item);
    }

    getItem(item) {
        this._cards.append(item);
    }
}