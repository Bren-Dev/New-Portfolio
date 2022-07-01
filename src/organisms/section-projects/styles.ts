import styled from "styled-components";
const background = require("../../assets/Background.png") as string;

export const Container = styled.div`
  margin-top: 40vh;
`;

export const DivRectangle = styled.div`
  @media (max-width: 600px) {
    svg{width:300px;}
  }
`;

export const ContentLine = styled.div`
  h1 {
    font-weight: 600;
    font-size: 56px;
    line-height: 7px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #ffffff;
    @media (max-width: 600px) {
      font-size: 46px;
    }
  }
`;

export const DivText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
  margin-bottom: 10px;
`;
export const TextLanguage = styled.p`
  font-weight: 600;
  font-size: 29px;
  line-height: 44px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 0;
  margin-top: 0;
`;
export const TextLevel = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  margin-top: 0;
  margin-bottom: 0;
  color: #ffffff;
`;

export const ContentEducation = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 1440px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 600px;
  }
  p,
  span {
    color: #ffffff;
  }
`;

export const DivLine = styled.div`
  width: 478px;
  height: 3px;
  background-color: #ffffff;
  border-radius: 4px;
  transform: rotate(-0.47deg);
  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const ContentStudies = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    div {
      width: 50px;
    }
    div p {
      font-size: 20px;
      width: 200px;
    }
  }
`;

export const DivLanguage = styled.div``;

export const ContentProjects = styled.div`
  margin-top: 10vw;
  background-image: url(${background});
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 130vh;
`;
export const TextProject = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 39px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20vh;
`;

export const DivProject = styled.div``;

export const DivWork = styled.div``;

export const ProjectsText = styled.p`
  font-weight: 800;
  font-size: 100px;
  line-height: 116px;
  width: 80%;
  color: #ff2b51;
  margin: 0;
  @media (max-width: 425px) {
    font-size: 70px;
    width: 100%;
  }
`;

export const DivIconStudies = styled.div`
  margin-right: 2vh;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const DivStudies = styled.div`
  p {
    font-weight: 600;
    font-size: 29px;
    line-height: 44px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    width: 457px;
    color: #ffffff;
  }
  span {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    color: #e3e1e1;
    margin-right: 10px;
  }
`;

export const BackgroundFooter = styled.img.attrs({ src: background })``;
