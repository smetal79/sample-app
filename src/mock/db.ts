import { commerce, datatype } from 'faker';

export type Product = { name: string; price: string; description: string }

const products: Array<Product> = [...Array(20).keys()].map(() => ({
    id: datatype.uuid(),
    price: commerce.price(20, 30),
    description: commerce.productDescription(),
    name: commerce.productName()
}));

const cart = {};

export const allProducts = () => products;

export const getCart = () => {
    const items = Object
    .values(cart)
    .map((cartItem: any) => {
        const { item, count } = cartItem;
        const { price } = item;
        const rate = Number(price);

        return { ...item, count, total: count * rate };
    });

    const total = items.reduce((t, { total }) => t + total, 0);
    const shipping = items.length === 0 ? 0 : (total < 50 ? 10 : 20);
    const totalIncludingShipping = total + shipping;

    return { total, shipping, items, totalIncludingShipping };
}
export const removeCartItem = (id) => {
    if (cart.hasOwnProperty(id)){
        delete cart[id];
    }
}

export const submitOrder = () => {
    Object.keys(cart).forEach(key => delete cart[key]);
}

export const addToCart = (item) => {

    const {  count = 0 } = cart[`${item.id}`] || {};

    cart[`${item.id}`] = { item, count: count +1 };
};