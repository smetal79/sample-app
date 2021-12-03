import React, { useState, useEffect } from 'react'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cart from './Cart';
import { fetchCart, deleteCartItem, submitOrder } from './cart.slice';
import { routeConfig } from '../routes';
import { Progress } from '../shared';

export default function LefMenuContainer() {

    const [isLoading, setLoading] = useState(true);
    const cart = useSelector((state: RootStateOrAny) => state.cart.cart);

    const dispatch = useDispatch();
    const navigatge = useNavigate();

    useEffect(() => {
        if (!isLoading){
            return;
        }

        dispatch(fetchCart());
        setLoading(false);

    }, [isLoading, dispatch])


    const onItemRemove = ({ id }) => {
        setLoading(true);
        dispatch((deleteCartItem as RootStateOrAny)(id));
    };

    const onOrderSubmit = () => {
        dispatch(submitOrder());
        navigatge(routeConfig.orderSuccess.path);
    };

    return (
        isLoading
            ? <Progress />
            : <Cart cart={cart} onItemRemove={onItemRemove} onOrderSubmit={onOrderSubmit} />);
}