import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: hsl(210, 38%, 95%);
`;

export const Wrapper = styled.div`
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
  margin-top: 2em;

  & > svg {
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
  }

  & > .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    justify-items: stretch;
  }
`;