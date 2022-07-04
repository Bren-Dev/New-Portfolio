import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HtmlIcon } from "assets/icons/html";
import { CssIcon } from "assets/icons/css";
import { JavaScriptIcon } from "assets/icons/js";
import { ReactIcon } from "assets/icons/react";
import * as S from "./styles";
import { GithubIcon } from "assets/icons/github";
import { PythonIcon } from "assets/icons/python";
import { TypescriptIcon } from "assets/icons/typescript";
import { LinuxIcon } from "assets/icons/linux";
import { SassIcon } from "assets/icons/sass";
import { MysqlIcon } from "assets/icons/mysql";
import { PostgresIcon } from "assets/icons/postgres";
import { GitIcon } from "assets/icons/git";
import { CppIcon } from "assets/icons/cpp";

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
    const skill = [
      { ic: <HtmlIcon />, p: "HTML" },
      { ic: <CssIcon />, p: "CSS" },
      { ic: <JavaScriptIcon />, p: "JavaScript" },
      { ic: <TypescriptIcon />, p: "TypeScript" },
      { ic: <SassIcon />, p: "Sass" },
      { ic: <ReactIcon />, p: "React" },
      { ic: <GitIcon />, p: "Git" },
      { ic: <GithubIcon />, p: "Github" },
      { ic: <PythonIcon />, p: "Python" },
      { ic: <CppIcon />, p: "C++" },
      { ic: <LinuxIcon />, p: "Linux" },
      { ic: <MysqlIcon />, p: "SQL" },
      { ic: <PostgresIcon />, p: "Postgresql" },
    ];
    return (
      <S.Container>
        <Slider {...settings}>
          {skill.map((s) => (
            <div>
              <S.Skill>
                {s.ic}
                <p>{s.p}</p>
              </S.Skill>
            </div>
          ))}
        </Slider>
      </S.Container>
    );
  }
}
