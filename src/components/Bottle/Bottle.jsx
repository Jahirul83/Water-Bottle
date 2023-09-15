import './Bottle.css';
import PropTypes from 'prop-types'
const Bottle = ({ bottle,handleAddToCard }) => {
    // console.log(bottle,handleAddToCard);
    const {name,img,price } = bottle;
    return (
        <div className='bottle-class'>
            <h4>name: {name}</h4>
            <img src={img} alt="" />
            <p>price: ${price}</p>
            <button onClick={()=>handleAddToCard(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.PropTypes = {
    bottle:PropTypes.object.isRequired,
    handleAddToCard:PropTypes.func.isRequired
}

export default Bottle;