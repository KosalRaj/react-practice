import { useState } from "react";
import { useQuery } from "react-query";
import './styles/sass/main.scss'

// Components
import { Wrapper, MainWrapper } from "./App.styles";
import { SpinnerCircular } from "spinners-react";
import Item from "./components/Item";
import Drawer from './components/Drawer';
import Navbar from './components/Navbar';
import Cart from './components/Cart'
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}


const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // !. Is Item already in cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      
    })
  };

  const handleRemoveFromCart = () => null;

  if (isLoading) return <Wrapper><SpinnerCircular /></Wrapper>;
  if (error) return <div>Something went wrong...</div>;


  return (
    <MainWrapper>
      <Navbar isCartOpen={isCartOpen} openDrawer={setIsCartOpen} />
      <Wrapper>
        {isCartOpen && <Drawer closeDrawer={setIsCartOpen}>
          <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        </Drawer>}
        <div className="product-grid">
          {data?.map(item => (
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </Wrapper>
    </MainWrapper>
  )
}

export default App
