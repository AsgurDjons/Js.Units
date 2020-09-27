class Goods {
    constructor(amount, image, count) {
        this.name = amount;
        this.image = image;
        this.count = count;
    }
    draw(elem) {
        document.querySelector(elem).innerHTML = `
        <img src="img/${this.image}" alt="${this.name}"><div>${this.name}</div>
        <div>${this.count}</div>
        `;
    }
}