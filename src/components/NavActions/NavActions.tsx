import { Wrapper } from "./NavActions.styles";
import { IoCartOutline } from 'react-icons/io5'

type Props = {
  openDrawer:(state: boolean) => void;
  isCartOpen: boolean;
  children?: React.ReactNode;
}

const NavActions: React.FC<Props> = ({ isCartOpen, openDrawer, children}) => {
  return (
    <Wrapper>
      <a className='cart' href='#' onClick={() => openDrawer(!isCartOpen)}>
        <IoCartOutline size={"2em"} />
        {children}
      </a>
    </Wrapper>
  )
}

export default NavActions;