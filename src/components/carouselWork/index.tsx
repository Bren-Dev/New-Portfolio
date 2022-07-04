import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styles";

export default class CarouselWork extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 450,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    };

    const work = [
      {
        hr: "https://teste-bren-dev.vercel.app/",
        p: "Deliverize",
        img: <S.ProjectOne />,
      },
      {
        hr: "https://healthy-food-nu.vercel.app/",
        p: "Healthy Food",
        img: <S.ProjectTwo />,
      },
      {
        hr: "https://landify-du1xqw6h6-bren-dev.vercel.app/",
        p: "Landify",
        img: <S.ProjectThree />,
      },
    ];

    return (
      <S.Container>
        <Slider {...settings}>
          {work.map((w) => (
            <a href={w.hr}>
              <S.DivProject>
                <S.DivImage>{w.img}</S.DivImage>
                <S.DivTitle>
                  <p>{w.p}</p>
                </S.DivTitle>
              </S.DivProject>
            </a>
          ))}
        </Slider>
      </S.Container>
    );
  }
}
