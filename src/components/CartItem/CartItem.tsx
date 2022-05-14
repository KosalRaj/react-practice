import { Wrapper } from './CartItem.styles';
import Button from '../Button'

import { CartItemType } from '../../App'

type Props = {
  item: CartItemType;
  addToCart: (clickedItem:CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <div className="cart-info">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button onClick={() => removeFromCart(item.id)}>-</Button>
        <p>{item.amount}</p>
        <Button onClick={() => addToCart(item)}>+</Button>
      </div>
    </div>
  </Wrapper>
)

export default CartItem;