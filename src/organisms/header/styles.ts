import styled from "styled-components";
const avatar = require("../../assets/avatar.png") as string;
export const Container = styled.div``;

export const DivTypeWriter = styled.div`
  font-weight: 800;
  font-size: 100px;
  line-height: 116px;
  color: #ffffff;
  opacity: 0.9;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  max-width: 623px;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 70px;
    line-height: 70px;
  }
  @media (max-width: 768px) {
    width: 380px;
    font-size: 60px;
  }
  @media (max-width: 425px) {
    font-size: 40px;
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ElementList = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-decoration: none;
  color: black;
  color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const TextName = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;
export const DivIcons = styled.div`
  svg {
    width: 40px;
  }
`;

export const DivImg = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImgAvatar = styled.img.attrs({ src: avatar })`
  @media (max-width: 1440px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const DivAllResume = styled.div`
  display: flex;
  justify-content: space-between;
 width: 100%;
`;


export const DivResume = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const DivPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;


export const HelloText = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 42px;
  color: #ffffff;
  @media (max-width: 1440px) {
    font-size: 15px;
  }
`;
export const DivButton = styled.div`
  margin-top: 50px;
`;

export const ButtonResume = styled.button`
  background: #ff2b51;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  width: 132px;
  height: 46px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;
