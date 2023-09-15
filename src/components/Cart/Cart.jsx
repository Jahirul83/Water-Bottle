import './Cart.css'
import PropTypes from 'prop-types'
const Cart = ({cart,handleRemoveCarts}) => {
    return (
        <div>
             <h4>Cart: {cart.length}</h4>
             <div className="cart-container">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={()=>handleRemoveCarts(bottle.id)}>Remove</button>
                    </div>)
                }
             </div>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveCarts:PropTypes.func.isRequired
}

export default Cart;