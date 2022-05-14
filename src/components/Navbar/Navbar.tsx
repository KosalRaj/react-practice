import { Children } from 'react';
import { Wrapper } from './Navbar.styles';

type Props = {
  children?: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <a className='logo' href="/">React-Cart</a>
        {children}
      </div>
    </Wrapper>
  )
}

export default Navbar;