import styled from "styled-components";

export const Body = styled.body`
  max-width: 100%;
  height: 100%;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #22254b;
  max-width: 100%;
  height: 100%
`;

export const MovieContainer = styled.div`
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  &:hover {
    border-width: 2px;
    border-color: white;
  }
`;

export const MovieImg = styled.img`
  max-width: 100%;
`;

export const MovieInfo = styled.div`
  padding: 20px;

  h4 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Overview = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  opacity: 0;
  position: absolute;
  &:hover {
    opacity: 0.8;
  }

  h4 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    overflow-y: auto;
  }
`;

