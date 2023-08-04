import styled from "styled-components";

export const StyledProfilePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #7fadeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  .headerHome {
    margin-top: 1.8125rem;
    margin-bottom: 1.773125rem;
    max-width: 90rem;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #051d40;
    padding-right: 1.313rem;
    border-radius: 0.25rem;
  }

  .btComeBackHome {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #8698d9;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000;
  }

  .btComeBackHome:hover {
    border: 0.07625rem solid #9f2fff;
    background-color: #9f2fff;
    color: #f8f9fa;
  }

  .imageClientProfile {
    width: 13rem;
    height: 12.938rem;
    border-radius: 100%;
    border: 0.156rem solid #051d40;
  }

  .logoDepart {
    width: 12.5rem;
    height: 10.688rem;
    object-fit: contain;
  }

  .areaClientProfile {
    margin-top: 1.8125rem;
    margin-bottom: 1.77313rem;
    max-width: 90rem;
    width: 60%;
    height: 19.438rem;
    padding-top: 0.938rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.25rem;
    gap: 0.438rem;
    background: transparent;
  }

  .areaDateHourProfile {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.938rem;
  }

  .clientProfile {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: #000000;
  }

  .NameClientProfile {
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.375rem;
    color: #000000;
  }

  .btEditProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #9f2fff;
    border: 0.125rem solid #051d40;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }

  .btEditProfile:hover {
    background: rgb(159, 47, 255);
    background: radial-gradient(
      circle,
      rgba(159, 47, 255, 1) 24%,
      rgba(5, 29, 64, 1) 100%
    );
    border: none;
  }

  .btDeleteProfile {
    max-width: 12.438rem;
    width: 100%;
    height: 3.75rem;
    margin-top: 1.1875rem;
    background-color: #cd8427;
    border: 0.125rem solid #051d40;
    border-radius: 0.5rem;
    padding: 0rem 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #000000;
  }

  .btDeleteProfile:hover {
    background-color: #ff8c00;
    border: none;
  }

  .areaButtonsProfile {
    width: 100%;
    padding: 0rem 0rem 0.688rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  @media (max-width: 43.75rem) {
    .headerHome {
      margin-top: 1.8125rem;
      margin-bottom: 1.773125rem;
      max-width: 90rem;
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logoDepart {
      max-width: 10.5956rem;
      width: 100%;
      height: 2.91438rem;
    }

    .imageClientProfile {
      width: 6.375rem;
      height: 6.188rem;
    }
    .btComeBackHome {
      max-width: 3.21812rem;
      width: 100%;
      height: 1.50687rem;
      font-size: 0.75rem;
      text-align: center;
    }

    .areaDateHourProfile {
      width: 80%;
    }

    .areaClientProfile {
      width: 91%;
      line-height: 1.563rem;
      gap: 0rem;
    }

    .clientProfile {
      font-size: 0.813rem;
    }

    .NameClientProfile {
      font-size: 1rem;
    }

    .areaButtonsProfile {
      flex-direction: column;
      gap: 0rem;
    }

    .btEditarProfile {
      height: 2.938rem;
    }
    .btDeletarProfile {
      height: 2.813rem;
    }
  }
`;
