//С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

let products_cart = [
    { 'product_id': 1, 'price': 1001 },
    { 'product_id': 2, 'price': 1002 },
    { 'product_id': 3, 'price': 1003 },
    { 'product_id': 4, 'price': 1004 },
]

function countBasketPrice() {
    let total = products_cart.reduce(function (acc, offer) {
        return { 'product': acc.product += 1, 'total': acc.total + offer.price }
    }, { 'product': 0, 'total': 0 });
    return total
}

let y = countBasketPrice();

console.log(y);