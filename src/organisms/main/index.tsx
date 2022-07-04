import React from "react";
import { Skills } from "assets/skills";
import SimpleSlider from "components/carouselSkills";
import * as S from "./styles";
export default function Main() {
  const company = [
    {
      id: "Ibyte 2020-2021",
      img: <S.CompanyOne />,
      desc: `   I worked organizing the electronic devices in the necessary
    sectors, made <br /> price printing and updated the campaigns,
    also assisted the computer <br /> technician with formatting in
    computers, external / internal cleaning and <br /> whatever was
    necessary.`,
    },
    {
      id: "Very Solutions 2021-2021",
      img: <S.CompanyTwo />,
      desc: `During the period I interned i worked on a project with React,
    Styled 
    Components and Typescript, I also improved my knowledge in CSS.`,
    },
    {
      id: "L2 Code 2022-Moment",
      img: <S.CompanyThree />,
      desc: `I am working on projects with React with Styled Components,
    TypeScript, API implementation, NextJS, and also work with emails`,
    },
  ];
  return (
    <S.Container>
      <S.DivAbout id="About">
        <S.AboutText>about.</S.AboutText>
        <S.TextDescription>
          Technology, innovation and design. <br />
          Starting her career as a programmer. <br />
          Basic qualities: Proactive, continuous interest in learning more.
        </S.TextDescription>
      </S.DivAbout>

      {company.map((c) => (
        <S.DivCompany>
          <S.DivContentCompany>
            {c.img}
            <div>
              <S.CompanyText>{c.id}</S.CompanyText>
              <S.TextDescription>{c.desc}</S.TextDescription>
            </div>
          </S.DivContentCompany>
        </S.DivCompany>
      ))}

      <S.ContentSkills>
        <S.DivVacuum></S.DivVacuum>
        <S.DivImage>
          <Skills />
        </S.DivImage>

        <S.DivSkills>
          <SimpleSlider />
        </S.DivSkills>
      </S.ContentSkills>
    </S.Container>
  );
}
