import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: min(400px, 100%);
  padding: 2em;
  top: 0;
  right: 0;
  bottom: 0;
  background: hsl(0, 0%, 100%);
  box-shadow: -8px 0 20px hsla(0, 0%, 40%, 0.2);
  z-index: 1;
  border-radius: 16px 0 0 16px;

  & .close-cart {
    position: absolute;
    right:  calc(100% + 0.5rem);
    top: 0.5rem;
    z-index: 1;
    border-radius: 50%;
    background: hsl(0, 76%, 57%);
    color: white;
    border: 0;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 24px;
    padding: 0;
    display: flex;
    justify-content: center;
    text-shadow: 0 0 1px hsl(0, 0%, 100%);
    cursor: pointer;

    &:hover {
      background-color: hsl(0, 76%, 47%);
    }
  }
`;