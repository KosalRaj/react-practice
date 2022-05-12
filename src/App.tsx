import { useState } from "react";
import { useQuery } from "react-query";
import './styles/sass/main.scss'

// Components
import { Wrapper } from "./App.styles";
import { SpinnerCircular } from "spinners-react";
import Item from "./components/Item";
import Drawer from './components/Drawer';
import Navbar from './components/Navbar'
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
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <Wrapper><SpinnerCircular /></Wrapper>;
  if (error) return <div>Something went wrong...</div>;


  return (
    <>
      <Navbar />
      <Wrapper>
        <Drawer open={isCartOpen} onClose={() => setCartOpen(false)} />
        <div className="main">
          {data?.map(item => (
            <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </Wrapper>
    </>
  )
}

export default App
