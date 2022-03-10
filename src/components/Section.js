export default class Section {
    constructor({items, renderer}, cardSelector) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._cards = document.querySelector(cardSelector);
    }

    addItem(item) {
        this._cards.prepend(item);
    }

    renderItems() {
        this._renderedItems.forEach(item => {
            this.addItem(this._renderer(item));
        });
    }
}