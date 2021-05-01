'use strict';
/* const products = [
    { id: 1, title: 'Notebook', price: 20000 },
    { id: 2, title: 'Mouse', price: 1500 },
    { id: 3, title: 'Keyboard', price: 5000 },
    { id: 4, title: 'Gamepad', price: 4500 },
];



const renderProduct = (title = '', price = '') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = (list = []) => {
    const productListHTML = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productListHTML.join("");
};

renderProducts(products); */


class ProductItem {
    constructor(obj, img = 'https://www.crystals.ru/uploads/local/field_photo/article_670/vozvrat-tovara.png?itok=YDKgGRVU') {
        this.title = obj.title,
            this.price = obj.price,
            this.productId = obj.id,
            this.img = img
    }


    render() {
        return `<div class="product-item" data-id= ${this.productId}>
                <img src="${this.img}" class="img" alt="image">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`
    }
};


class ProductList {
    constructor(container = '.products') {
        this.container = container,
            this.goods = [],
            this.list = [],

            this.fetchGoods(),
            this.render()
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (let good of this.goods) {
            this.list.push(good);
            const item = new ProductItem(good)
            block.insertAdjacentHTML('afterbegin', item.render())
        }
    }
}


new ProductList()