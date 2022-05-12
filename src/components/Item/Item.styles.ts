import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px hsla(0, 0%, 30%, 30%);
  padding: 1em;
  border-radius: 0.5em;

  & > img {
    max-height: 250px;
    object-fit: contain;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    & > h3 {
      display: -webkit-box;
      height: 3em;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
