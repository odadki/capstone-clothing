import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  // padding-left: 100px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 992px) {
    align-content: center;
    width: 100%;
    padding: 0 60px 0 60px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 992px) {
    // display: grid;
    // grid-template-column: repeat(2, 1fr);
    // align-items: center;
    // box-sizing: border-box !important;
  }

  @media (max-width: 992px) {
    justify-content: start;
  }
`;
