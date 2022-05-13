import Button from "../Button";
import { CartItemType } from '../../App';
import { Wrapper } from './Drawer.styles';

type Props = {
  closeDrawer:(state: boolean) => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<Props> = ({ closeDrawer, children }) => {
  return (
    <Wrapper>
      <button className="close-cart" onClick={() => closeDrawer(false)}>x</button>
      {children}
    </Wrapper>
  )
}

export default Drawer;