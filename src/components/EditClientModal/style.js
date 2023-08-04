import styled from "styled-components";

export const StyledContainerModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    max-width: 23.0625rem;
    width: 100%;
    border-radius: 0.25rem;
    background-color: #051d40;
    animation: editAnimation 1.5s ease-in;
    transform: 1.5s ease-in;
  }
  .headerModal {
    max-width: 23.0625rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .titleModal {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #f8f9fa;
  }
  .btCloseModal {
    max-width: 0.6875rem;
    width: 100%;
    height: 1.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  .btCloseModal:hover {
    -webkit-transform: scale(1.1);
    -webkit-transition: scale(1.1);
  }
  .formModal {
    max-width: 23.0625rem;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: #7fadeb;
    display: flex;
    flex-direction: column;
    gap: 0.8125rem;
    border-radius: 0rem 0rem 0.25rem 0.25rem;
  }
  .labelModal {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.76125rem;
    color: #000000;
  }
  .inputModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1rem;
    background-color: #d9e8fc;
    border: 0.07625rem solid #8698d9;
    border-radius: 0.25rem;
    color: #000000;
  }
  .inputModal::placeholder {
    color: #000000;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.015rem;
  }
  .selectModal {
    max-width: 20.620625rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1rem;
    background-color: #d9e8fc;
    border: 0.07625rem solid #8698d9;
    border-radius: 0.25rem;
    color: #000000;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1.015rem;
  }
  .areaError {
    color: red;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.75rem;
  }
  .btRegisterModal {
    margin-bottom: 0.625rem;
    max-width: 20.25rem;
    width: 100%;
    height: 3rem;
    padding: 0rem 1.375rem;
    background-color: #9f2fff;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
    border-radius: 0.25rem;
  }
  .btRegisterModal:hover {
    background: rgb(159, 47, 255);
    background: radial-gradient(
      circle,
      rgba(159, 47, 255, 1) 24%,
      rgba(5, 29, 64, 1) 100%
    );
  }

  @media (max-width: 43.75rem) {
    .modalContent {
      width: 83%;
    }
  }

  @keyframes editAnimation {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
