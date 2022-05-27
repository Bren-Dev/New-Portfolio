import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  scrollbar-width: none;
  div {
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
  .slick-slide .slick-active {
    width: 150px;
    @media (max-width: 1024px) {
      width: 70px;
    }
  }
`;

export const Skill = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 31px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;
