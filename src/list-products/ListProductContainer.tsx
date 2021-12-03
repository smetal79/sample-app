import React, { useEffect } from 'react'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { fetchProducts } from './listProduct.slice';
import ListProducts from './ListProducts';
import { addItemToCart } from '../cart';

export default function ListProductContainer() {
    const products = useSelector((state: RootStateOrAny) => state.productList.products);
    const dispatch = useDispatch();

    useEffect(() => {

        if (products.length === 0) {
            dispatch(fetchProducts())
        }
    }, [products, dispatch])

    const onAddItem = (item) => dispatch((addItemToCart as any)(item));

    return (
        products && products.length 
        ? <ListProducts products={products} onAdd={onAddItem} />
        : null
    )
}