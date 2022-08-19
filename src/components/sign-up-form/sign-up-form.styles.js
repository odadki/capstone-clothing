import styled from "styled-components";

export const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 992px) {
    align-content: center;
    width: 100%;
    padding: 0 60px 0 60px;
    margin-top: 70px;
  }
`;

export const button = styled.button`
  display: flex;

  @media (max-width: 992px) {
    display: block;
    margin: 0 auto;
  }
`;
