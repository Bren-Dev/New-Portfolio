import React from "react";
import { LinkedinIcon } from "../../assets/icons/linkedin";
import { useTypewriter } from "react-simple-typewriter";
import * as S from "./styles";
import { GithubIconTwo } from "../../assets/icons/githubTwo";

export default function Header() {
  const { text } = useTypewriter({
    words: ["Front-End Developer"],
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
    loop: 1,
    deleteSpeed: 150,
    typeSpeed: 200,
  });
  return (
    <S.Container>
      <S.Nav>
        <S.TextName>Brenda Dev</S.TextName>
        <S.ListHeader>
          <S.ElementList href="#Home">Home</S.ElementList>
          <S.ElementList href="#About">About</S.ElementList>
          <S.ElementList href="#Work">Work</S.ElementList>
        </S.ListHeader>
        <S.DivIcons>
          <a href="/">
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
      <S.DivResume>
        <S.DivVacuum></S.DivVacuum>
        <S.DivPresentation>
          <S.HelloText>Hello I'm Brenda</S.HelloText>
          <S.DivTypeWriter>{text}</S.DivTypeWriter>

          <S.DivButton>
            <S.ButtonResume>Resume</S.ButtonResume>
          </S.DivButton>
        </S.DivPresentation>
        <S.DivImg>
          <S.ImgAvatar />
        </S.DivImg>
      </S.DivResume>
    </S.Container>
  );
}
