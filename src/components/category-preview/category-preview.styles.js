import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    @media (min-width: 768px) and (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 30px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 30px;
    }

    @media (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 30px;
    }
  }
`;
// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

//   .title {
//     font-size: 28px;
//     margin-bottom: 25px;
//     cursor: pointer;
//   }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
