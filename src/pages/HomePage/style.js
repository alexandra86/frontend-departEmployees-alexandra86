import styled from "styled-components";

export const StyledHomePage = styled.div`
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

  .areaUser {
    margin-bottom: 2.3125rem;
    max-width: 90rem;
    width: 60%;
    height: 6.25rem;
    padding: 0.188rem 0.313rem 0rem 0.313rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #7fadeb;
  }

  .hello {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  .areaWelcome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #000000;
  }

  .logoDepart {
    height: 88px;
    width: 203px;
    object-fit: contain;
  }

  .btViewProfile {
    background: rgb(159, 47, 255);
    background: radial-gradient(
      circle,
      rgba(159, 47, 255, 1) 24%,
      rgba(5, 29, 64, 1) 100%
    );
    height: 1.5rem;
    border-radius: 0.438rem;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #ffffff;
  }

  .btViewProfile:hover {
    -webkit-transform: scale(1.1);
  }

  .areaInformation {
    max-width: 90rem;
    width: 60%;
    max-height: 26rem;
    overflow: auto;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 2.3125rem;
    gap: 1.4375rem;
  }

  .areaInformation::-webkit-scrollbar {
    width: 0.5rem;
  }

  .areaInformation::-webkit-scrollbar-thumb {
    background-color: #051d40;
  }

  .areaInformation::-webkit-scrollbar-thumb:hover {
    background-color: #051d40;
  }

  .areaNoContact {
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 12.5rem;
    border-radius: 0.438rem;
    background: rgb(5, 29, 64);
    background: radial-gradient(
      circle,
      rgba(5, 29, 64, 1) 24%,
      rgba(93, 102, 115, 1) 99%
    );
  }

  .freseNoContact {
    border-radius: 0.438rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #ffffff;
  }

  .areaContact {
    max-width: 90rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bTContactHome {
    background-color: transparent;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.125rem;
    color: #000000;
  }

  .ulCardContact {
    margin-bottom: 0.625rem;
    max-width: 90rem;
    width: 100%;
    background: rgb(5, 29, 64);
    background: radial-gradient(
      circle,
      rgba(5, 29, 64, 1) 24%,
      rgba(93, 102, 115, 1) 99%
    );
    border-radius: 0.25rem;
    padding: 1.4375rem 1.625rem 1.4375rem 1.375rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
    justify-items: center;
    gap: 1rem;
  }

  .btComeBackLogin {
    max-width: 4.218125rem;
    width: 100%;
    height: 2.506875rem;
    padding: 0rem 1rem;
    border-radius: 0.25rem;
    border: 0.07625rem solid #212529;
    background-color: #8698d9;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 0.75rem;
    color: #000000;
  }

  .btComeBackLogin:hover {
    border: 0.07625rem solid #9f2fff;
    background-color: #9f2fff;
    color: #f8f9fa;
  }

  .btOpenModal {
    margin-right: 0.625rem;
    max-width: 2.030625rem;
    width: 100%;
    height: 2rem;
    background-color: #212529;
    font-size: 0.67rem;
    padding: 0.625rem 0.625rem;
    color: #ffffff;
  }

  .btOpenModal:hover {
    background-color: #9f2fff;
    -webkit-transform: scale(1.1);
  }

  @media (max-width: 56.25rem) {
    .areaUser {
      display: flex;
      align-items: center;
      width: 60%;
    }
    .areaContact {
      display: flex;
      align-items: center;
      gap: 0;
      width: 100%;
    }
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
    .logoKenziHub {
      max-width: 10.5956rem;
      width: 100%;
      height: 2.91438rem;
    }
    .areaUser {
      display: flex;
      align-items: center;
      width: 80%;
      flex-direction: column;
      gap: 0.625rem;
    }

    .areaInformation {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      width: 80%;
      line-height: 1.75rem;
    }
    .ulCardContact {
      padding: 0.625rem 0.3125rem;
    }
    .imageClient {
      width: 4.375rem;
      height: 4.188rem;
    }
    .btComeBackLogin {
      max-width: 3.21812rem;
      width: 100%;
      height: 1.50687rem;
      font-size: 0.75rem;
    }
    .hello {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 0.625rem;
    }
  }
`;
