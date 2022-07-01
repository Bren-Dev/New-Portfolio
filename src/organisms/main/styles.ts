import styled from "styled-components";
const companyone = require("../../assets/company1.png") as string;
const companytwo = require("../../assets/company2.png") as string;
const companythree = require("../../assets/company3.png") as string;
export const Container = styled.section`
  margin-top: 100px;
`;

export const DivImage = styled.div`
  margin-left: 25vh;
  margin-bottom: 20vh;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const DivAbout = styled.div`
  margin-left: 5vw;
`;

export const DivVacuum = styled.div`
  height: 300px;
`;

export const ContentSkills = styled.div``;

export const DivSkills = styled.div`
  display: flex;
  justify-content: center;
`;
export const Skill = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #ffffff;
`;

export const AboutText = styled.p`
  font-weight: 800;
  font-size: 100px;
  line-height: 116px;
  color: #ff2b51;
  margin: 0;
  @media (max-width: 425px) {
    font-size: 80px;
  }
`;
export const CompanyText = styled.li`
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
`;

export const TextDescription = styled.p`
  font-size: 24px;
  line-height: 44px;
  color: #ffffff;
  border: 1px solid #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 900px;
  max-width: 900px;
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 30px;
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const DivCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;

export const DivContentCompany = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: space-evenly;
  }
  img {
    @media (max-width: 768px) {
      display: none;
    }
    @media (max-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const CompanyOne = styled.img.attrs({ src: companyone })`
  width: 130px;
  height: 126px;
`;

export const CompanyTwo = styled.img.attrs({ src: companytwo })`
  width: 130px;
  height: 132px;
`;
export const CompanyThree = styled.img.attrs({ src: companythree })`
  width: 130px;
  height: 132px;
`;
