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
      </div>
    </Wrapper>
  )
}

export default Cart;