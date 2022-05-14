import styled from "styled-components"

export const Wrapper = styled.div`
  
  box-shadow: 0 6px 18px hsla(0, 0%, 40%, 0.2);
  position: sticky;
  top: 0;
  z-index: 1;
  background: hsl(0, 0%, 100%);

  & > div {
    max-width: 1180px;
    padding: 0 0.625em;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  & .logo {
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    color: hsl(0, 0%, 0%);
  }
`;