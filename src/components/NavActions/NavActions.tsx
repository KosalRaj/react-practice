import { Wrapper, OuterWrapper } from "./NavActions.styles";
import { IoCartOutline } from 'react-icons/io5';
import Button from '../Button'

type Props = {
  openDrawer: (state: boolean) => void;
  isCartOpen: boolean;
  children?: React.ReactNode;
}

const NavActions: React.FC<Props> = ({ isCartOpen, openDrawer, children }) => {
  return (
    <OuterWrapper>
      <Wrapper>
        <a className='cart' href='#' onClick={() => openDrawer(!isCartOpen)}>
          <IoCartOutline size={"2em"} />
          {children}
        </a>
      </Wrapper>
      <Button>Login</Button>
    </OuterWrapper>
  )
}

export default NavActions;