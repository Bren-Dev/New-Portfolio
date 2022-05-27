import styled from "styled-components";
const project1 = require("../../assets/project1.jpg") as string;
const project2 = require("../../assets/project2.jpg") as string;
const project3 = require("../../assets/project3.jpg") as string;
export const Container = styled.div`
  max-width: 1300px;
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 31px;
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 1440px) {
    width: 900px;
  }
  @media (max-width: 769x) {
    width: 300px;
  }
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivTitle = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0px 0px 30px 30px;
`;

export const DivProject = styled.div`
  margin-left: 30vw;
  width: 380px;
  height: 280px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectOne = styled.img.attrs({ src: project1 })`
  padding-top: 19px;
  width: 80%;
`;

export const ProjectTwo = styled.img.attrs({ src: project2 })`
  padding-top: 19px;
  width: 80%;
`;

export const ProjectThree = styled.img.attrs({ src: project3 })`
  padding-top: 19px;
  width: 80%;
`;
