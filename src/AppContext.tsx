import React, { useContext } from 'react';
import CartContext from './cartContext';

const AppContext: React.FC = () => {
    const { products } = useContext(CartContext);
    return (
        <ul>{products?.map(product => product.id)}</ul>
    )
}
export default AppContext;
