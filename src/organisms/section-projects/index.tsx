import RectangleIcon from "assets/icons/rectangle";
import StudiesIcon from "assets/icons/studies";
import CarouselWork from "components/carouselWork";
import * as S from "./styles";
export default function Projects() {
  return (
    <S.Container>
      <S.ContentEducation>
        <S.DivLanguage>
          <S.ContentLine>
            <h1>Language</h1>
            <S.DivLine />
          </S.ContentLine>
          <S.DivText>
            <S.TextLanguage>English</S.TextLanguage>
            <S.TextLevel>Intermediary</S.TextLevel>
          </S.DivText>
          <S.DivRectangle>
            <RectangleIcon />
          </S.DivRectangle>
        </S.DivLanguage>

        <S.DivStudies>
          <S.ContentLine>
            <h1>Studies</h1>
            <S.DivLine />
          </S.ContentLine>

          <S.ContentStudies>
            <S.DivIconStudies>
              <StudiesIcon />
            </S.DivIconStudies>
            <div>
              <p>Análise e Desenvolvimento de sistemas</p>
              <span>IFRN</span>
              <span>2021</span>
            </div>
          </S.ContentStudies>
        </S.DivStudies>
      </S.ContentEducation>

      <S.ContentProjects id="Work">
        <div>
          <S.TextProject>My recent work</S.TextProject>
          <S.DivWork>
            <CarouselWork />
          </S.DivWork>
        </div>
      </S.ContentProjects>
    </S.Container>
  );
}
