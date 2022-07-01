import React from "react";
import { Skills } from "../../assets/skills";
import SimpleSlider from "../../components/carouselSkills";
import * as S from "./styles";
export default function Main() {
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
      <S.DivCompany>
        <S.DivContentCompany>
          <S.CompanyOne />
          <div>
            <S.CompanyText>Ibyte 2020-2021</S.CompanyText>
            <S.TextDescription>
              I worked organizing the electronic devices in the necessary
              sectors, made <br /> price printing and updated the campaigns,
              also assisted the computer <br /> technician with formatting in
              computers, external / internal cleaning and <br /> whatever was
              necessary.
            </S.TextDescription>
          </div>
        </S.DivContentCompany>
      </S.DivCompany>

      <S.DivCompany>
        <S.DivContentCompany>
          <S.CompanyTwo />
          <div>
            <S.CompanyText>Very Solutions 2021-2021</S.CompanyText>
            <S.TextDescription>
              During the period I interned i worked on a project with React,
              Styled <br />
              Components and Typescript, I also improved my knowledge in CSS.
            </S.TextDescription>
          </div>
        </S.DivContentCompany>
      </S.DivCompany>

      <S.DivCompany>
        <S.DivContentCompany>
          <S.CompanyTwo />
          <div>
            <S.CompanyText>L2 Code 2022-Moment</S.CompanyText>
            <S.TextDescription>
              During the period I interned i worked on a project with React,
              Styled <br />
              Components and Typescript, I also improved my knowledge in CSS.
            </S.TextDescription>
          </div>
        </S.DivContentCompany>
      </S.DivCompany>

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
