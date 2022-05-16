import { Wrapper } from './Cart.styles';
import Button from '../Button'

import CartItem from '../CartItem'
import { CartItemType } from '../../App'

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({cartItems, addToCart, removeFromCart}) => {

  const calculateTotal = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      <div className="cart-list">
      {cartItems.length === 0 ? <p>Cart is empty!!!</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total Price: ${calculateTotal(cartItems).toFixed(2)}</h2>
      </div>
    </Wrapper>
  )
}

export default Cart;