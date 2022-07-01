import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const ContentDivForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 30vh;
  width: 70%;
  @media (max-width: 768px) {
    position: static;
    margin-left:10vw;
  }
`;
export const DivFinal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
   display:none;
  }
`;

export const DivForm = styled.div`
  background: rgba(40, 39, 39, 0.6);
  backdrop-filter: blur(20px);
  opacity: 0.9;
  border-radius: 30px;
  height: 600px;
  margin-top: 20vh;
  display: flex;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: #ffffff;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #ffffff;
    width: 50%;
  }
  form input {
    padding: 10px 10px 10px 20px;
    gap: 10px;

    width: 340px;
    height: 40px;

    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
    border-radius: 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #ffffff;
    @media (max-width: 1024px) {
    width: 140px;
  }
  }

  @media (max-width: 1024px) {
    justify-content:center;
  }

`;

export const DivTouch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: 1024px) {
    display:none;
  }
`;

export const DivEmail = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #ffffff;
    margin-left: 20px;
  }
`;

export const DivMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  ::-webkit-input-placeholder {
  }
  input:-moz-placeholder {
    color: white;
  }
  form {
    margin-top: 20px;
  }
  input {
    width: 100px;
    margin-bottom: 20px;
    border: none;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 160px;
    height: 40px;
    background: linear-gradient(
      105.95deg,
      #de6161 24.79%,
      #ff0000 71.87%,
      #ff0000 71.87%
    );
    box-shadow: 0px 10px 20px rgba(7, 7, 26, 0.15);
    border-radius: 10px;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
