import styled from "styled-components";

export const StyleCardDepartment = styled.li`
  max-width: 18.313rem;
  width: 100%;
  height: 5.0625rem;
  padding: 0.8125rem 0.38875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9e8f5;
  border-radius: 0.25rem;
  animation: card 1.5s ease-in;
  transform: 1.5s ease-in;

  .nameDepartment {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.75rem;
    color: #000000;
  }

  @keyframes card {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
