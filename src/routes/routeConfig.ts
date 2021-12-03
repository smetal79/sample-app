
import ListProducts from '../list-products';
import Cart from '../cart';
import OrderSuccess from '../order-success';


const routePaths = Object.freeze({
    dashboard: { path: '/', Component: ListProducts },
    cart: { path: '/cart', Component: Cart },
    products: { path: '/products', Component: ListProducts },
    orderSuccess: { path: '/order-success', Component: OrderSuccess }
});

export default routePaths;