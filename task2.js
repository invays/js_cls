let cart = []

function ProductData(name, model, price, quantity) {
    this.name = name,
        this.model = model,
        this.price = price,
        this.quantity = quantity,
};

cart.push(
    new ProductData(
        'Artisan', 'SKU-234', 98, 9
    )
);

cart.push(
    new ProductData(
        'Artisan- 364', 'SKU-234', 78, 8
    )
);

cart.push(
    new ProductData(
        'Artisan=43', 'SKU-234', 89, 9
    )
);

function GetTotalCart(cart) {
    return cart.reduce(function (acc, item) {
        return { 'product': acc.product + item.quantity, 'total': acc.total + item.price }
    }, { 'product': 0, 'total': 0 })
}
console.log(cart)
console.log(GetTotalCart(cart));