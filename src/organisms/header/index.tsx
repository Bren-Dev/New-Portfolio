import React from "react";
import { LinkedinIcon } from "../../assets/icons/linkedin";
import { useTypewriter } from "react-simple-typewriter";
import * as S from "./styles";
import { GithubIconTwo } from "../../assets/icons/githubTwo";
import { DivVacuum } from "../main/styles";

export default function Header() {
  const { text } = useTypewriter({
    words: ["Front-End Developer"],
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
    loop: 3,
    deleteSpeed: 5,
    typeSpeed: 200,
  });
  return (
    <S.Container>
      <S.Nav id="Home">
        <S.TextName>Brenda Dev</S.TextName>
        <S.ListHeader>
          <S.ElementList href="#Home">Home</S.ElementList>
          <S.ElementList href="#About">About</S.ElementList>
          <S.ElementList href="#Work">Work</S.ElementList>
        </S.ListHeader>
        <S.DivIcons>
          <a
            href="https://www.linkedin.com/in/brenda-dev-2bb14b216/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/Bren-Dev"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIconTwo />
          </a>
        </S.DivIcons>
      </S.Nav>
      <S.DivAllResume>
        <DivVacuum />
        <S.DivResume>
          <S.DivPresentation>
            <S.HelloText>Hello I'm Brenda</S.HelloText>
            <S.DivTypeWriter>{text}</S.DivTypeWriter>

            <S.DivButton>
              <a
                href="https://drive.google.com/file/d/1Qqq1ow0gjAI1RSULOSxVjBeNYJ9Ke2j7/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <S.ButtonResume>Resume</S.ButtonResume>
              </a>
            </S.DivButton>
          </S.DivPresentation>
          <S.DivImg>
            <S.ImgAvatar />
          </S.DivImg>
        </S.DivResume>
      </S.DivAllResume>
    </S.Container>
  );
}
