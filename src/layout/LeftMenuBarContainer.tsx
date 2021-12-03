import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import LeftMenuBar from './LeftMenuBar';

export default function LefMenuContainer() {

    const cartItems = useSelector((state: RootStateOrAny) => state.cart.currentItems);

    return (<LeftMenuBar cartItems={cartItems.length}/>)
}