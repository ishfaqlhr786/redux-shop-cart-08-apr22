import Button from '@material-ui/core/Button'

import {CartItemType} from '../App'
//import {Wrapper}  from '../Items/Items.styles'

// type Props={
// item:CartItemType,
// handleAddToCart:(clickedItem:CartItemType)=>void;
// }
const Items=({item,
handleAddToCart}) =>(
    <>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>
                {item.title}
            </h3>
            <p>{item.description}</p>
            <p>{item.id}</p>
            <p>{item.price}</p>
        </div>
        <Button onClick={()=> handleAddToCart(item)}>Add to cart</Button>
    </>
)

export default Items;