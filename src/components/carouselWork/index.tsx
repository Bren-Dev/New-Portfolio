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
      ],
    };
    return (
      <S.Container>
        <Slider {...settings}>
          <a href="https://teste-bren-dev.vercel.app/">
            <S.DivProject>
              <S.DivImage>
                <S.ProjectOne />
              </S.DivImage>
              <S.DivTitle>
                <p>Deliverize</p>
              </S.DivTitle>
            </S.DivProject>
          </a>

          <a href="https://healthy-food-nu.vercel.app/">
            <S.DivProject>
              <S.DivImage>
                <S.ProjectTwo />
              </S.DivImage>
              <S.DivTitle>
                <p>Healthy Food</p>
              </S.DivTitle>
            </S.DivProject>
          </a>

          <a href="https://landify-du1xqw6h6-bren-dev.vercel.app/">
            <S.DivProject>
              <S.DivImage>
                <S.ProjectThree />
              </S.DivImage>
              <S.DivTitle>
                <p>Landify</p>
              </S.DivTitle>
            </S.DivProject>
          </a>
        </Slider>
      </S.Container>
    );
  }
}
