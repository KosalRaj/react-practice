import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  height: 100%;
  box-shadow:
    0px 1.8px 3.6px rgba(0, 0, 0, 0.024),
    0px 5px 10px rgba(0, 0, 0, 0.035),
    0px 12.1px 24.1px rgba(0, 0, 0, 0.046),
    0px 40px 80px rgba(0, 0, 0, 0.07)
  ;
  padding: 1em;
  border-radius: 0.5em;
  background-color: hsl(0, 0%, 100%);

  & > img {
    height: 250px;
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
