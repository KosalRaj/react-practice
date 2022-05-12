import Button from "../Button";

import { CartItemType } from '../../App';

// import { Wrapper } from "./Item.styles";

import styled from "styled-components";

import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h4>${item.price}</h4>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
)

export default Item;
  