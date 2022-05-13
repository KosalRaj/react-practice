import { Wrapper } from './Navbar.styles';
import { IoCartOutline } from 'react-icons/io5'

type Props = {
  openDrawer:(state: boolean) => void;
  isCartOpen: boolean;
}

const Navbar: React.FC<Props> = ({ isCartOpen, openDrawer }) => {
  return (
    <Wrapper>
      <div>
        <a className='logo' href="/">React-Cart</a>
        <a className='cart' href='#' onClick={() => openDrawer(!isCartOpen)}>
          <IoCartOutline size={"2em"} />
        </a>
      </div>
    </Wrapper>
  )
}

export default Navbar;