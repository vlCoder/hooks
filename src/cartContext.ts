import { createContext } from 'react';


interface Product {
    id: number;
    name: string;
    price: number;
}

interface Cart {
    products: Product[],
    frente?: number,
}


const CartContext = createContext<Cart>({
    products: [],
    frente: 0,
});

export default CartContext;