import styled from "styled-components";

export const Wrapper = styled.div`

  height: 100%;
  overflow: auto;

  & .cart-list {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0 0 0.5em 0;
    padding-bottom: 0.5em;
    position: sticky;
    top: 0;
    background: hsl(0, 0%, 100%);
  }
`;