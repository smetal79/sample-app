import React, { useEffect } from 'react'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { fetchProducts } from './listProduct.slice';
import ListProducts from './ListProducts';
import { addItemToCart } from '../cart';

export default function ListProductContainer() {

    const products = useSelector((state: RootStateOrAny) => state.productList.products);
    const currentItems = useSelector((state: RootStateOrAny) => state.cart.currentItems);

    const dispatch = useDispatch();

    useEffect(() => {

        if (products.length !== 0) {
            return;
        }

        dispatch(fetchProducts());
    }, [products, dispatch])

    const selectedItems = currentItems
        .reduce((soFar, { id }) => {
            const item = soFar[id] ? soFar[id] : (soFar[id] = { id: id, count: 0 });
            item.count = item.count + 1;
            return soFar;

        }, {})

    const onAddItem = (item) => dispatch((addItemToCart as any)(item));

    return (
        products && products.length
            ? <ListProducts products={products} selectedItems={selectedItems} onAdd={onAddItem} />
            : null
    )
}