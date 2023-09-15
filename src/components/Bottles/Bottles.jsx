import { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, []);

    const handleAddToCard = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    }

    const handleRemoveCarts = (id) => {

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLocalStorage(id);
    }

    useEffect(() => {
        console.log(bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const saveCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottles => bottles.id === id);
                if (bottle) {
                    saveCart.push(bottle);
                }

            }
            console.log(saveCart);
            setCart(saveCart)

        }
    }, [bottles])
    return (
        <div>
            <h3>Bottles Available :{bottles.length}</h3>
            <Cart cart={cart} handleRemoveCarts={handleRemoveCarts}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id} bottle={bottle}
                        handleAddToCard={handleAddToCard}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};


export default Bottles;