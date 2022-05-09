import { useState } from "react";
import { useQuery } from "react-query";

// Components
import { Wrapper } from "./App.styles";
import { SpinnerCircular } from "spinners-react";
import Item from "./components/Item/Item";
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
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data);

  const getTotalItems = () => null;
  
  const handleAddToCart = (clickedItem: CartItemType) => null;
  
  const handleRemoveFromCart = () => null;

  if (isLoading) return <SpinnerCircular />;
  if (error) return <div>Something went wrong...</div>;


  return (
  <Wrapper>
    <div className="grid">
      {data?.map(item => (
        <div className="grid-item" key={item.id}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </div>
      ))}
    </div>
  </Wrapper>
  )
}

export default App
