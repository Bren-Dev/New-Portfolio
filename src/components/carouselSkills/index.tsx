import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HtmlIcon } from "../../assets/icons/html";
import { CssIcon } from "../../assets/icons/css";
import { JavaScriptIcon } from "../../assets/icons/js";
import { ReactIcon } from "../../assets/icons/react";
import { NodeIcon } from "../../assets/icons/node";

import * as S from "./styles";
import { GithubIcon } from "../../assets/icons/github";
import { PythonIcon } from "../../assets/icons/python";
import { TypescriptIcon } from "../../assets/icons/typescript";
import { LinuxIcon } from "../../assets/icons/linux";
import { SassIcon } from "../../assets/icons/sass";
import { MysqlIcon } from "../../assets/icons/mysql";
import { PostgresIcon } from "../../assets/icons/postgres";
import { GitIcon } from "../../assets/icons/git";
import { CppIcon } from "../../assets/icons/cpp";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 450,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <S.Container>
        <Slider {...settings}>
          <div>
            <S.Skill>
              <HtmlIcon />
              <p>HTML</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <CssIcon />
              <p>CSS</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <JavaScriptIcon />
              <p>JavaScript</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <TypescriptIcon />
              <p>TypeScript</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <SassIcon />
              <p>Sass</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <ReactIcon />
              <p>React</p>
            </S.Skill>
          </div>

          <div>
            <S.Skill>
              <NodeIcon />
              <p>NodeJS</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <GitIcon />
              <p>Git</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <GithubIcon />
              <p>Github</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <PythonIcon />
              <p>Python</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <CppIcon />
              <p> c++</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <LinuxIcon />
              <p>Linux</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <MysqlIcon />
              <p>SQL</p>
            </S.Skill>
          </div>
          <div>
            <S.Skill>
              <PostgresIcon />
              <p>Postgresql</p>
            </S.Skill>
          </div>
        </Slider>
      </S.Container>
    );
  }
}
