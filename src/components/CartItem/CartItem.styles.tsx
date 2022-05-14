import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  border-top: 1px solid hsl(0, 0%, 75%);

  & > div {
    flex: 1;
  }
  img {
    max-width: 80px;
    object-fit: contain;
    margin-right: 1em
  }
  h3 {
    font-size: 1em;
    color: hsl(0, 0%, 5%);
    font-weight: 500;
    line-height: 1.2;
  }

  .cart-info {
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      padding: 0 0.625em;
      height: 40px;
      text-transform: uppercase;
    }
  }
`;