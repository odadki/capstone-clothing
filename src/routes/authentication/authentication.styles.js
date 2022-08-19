import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-around;
  margin: 30px auto;

  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // column-gap: 20px;
  // row-gap: 10px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 700px;
  }

  // @media (min-width: 576px) and (max-width: 767px) {
  //   grid-template-columns: repeat(1, 1fr);
  // }

  // @media (max-width: 575px) {
  //   grid-template-columns: repeat(1, 1fr);
  //   // row-gap: 30px;
  // }
`;
