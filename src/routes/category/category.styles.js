import styled from "styled-components";

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 28px;
  }
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 575px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// .category-container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   column-gap: 20px;
//   row-gap: 50px;
// }

// .category-title {
//   font-size: 38px;
//   margin-bottom: 25px;
//   text-align: center;
// }
