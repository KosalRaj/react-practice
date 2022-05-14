import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: hsl(236, 52%, 49%);
  color: hsl(0, 0%, 100%);
  padding: 0.5em 2em;
  font-size: 1.25rem;
  border-radius: 0.25em;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid hsl(236, 52%, 39%);

  &:hover {
    background-color: hsl(236,52%, 44%);
  }

  &:active {
    transform: scale(1.01);
  }
`;