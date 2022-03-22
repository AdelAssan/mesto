export default class Section {
    constructor({items, renderer}, cardSelector) {
        this._renderedItems = items;
        this._renderer = renderer;

        this._cards = document.querySelector(cardSelector);
    }

    renderItems(renderInf) {
        this._renderedItems = renderInf;
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