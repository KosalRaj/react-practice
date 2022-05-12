import { Wrapper } from './Navbar.styles';
import { IoCartOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <a className='logo' href="/">React-Cart</a>
        <div>
          <IoCartOutline size={"2em"} />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar;