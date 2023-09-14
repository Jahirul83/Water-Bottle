
import './Bottle.css';
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

export default Bottle;