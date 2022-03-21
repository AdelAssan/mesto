export default class Section {
    constructor({items, renderer}, cardSelector) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._cards = document.querySelector(cardSelector);
    }

    renderItems() {
        this._renderedItems.forEach(data => {
            this._renderer(data);
        });
    }

    addItem(item) {
        this._cards.prepend(item);
    }

    getItem(item) {
        this._cards.append(item);
    }
}