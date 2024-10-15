import styled from "styled-components";
import _default from "../themes/default";

export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
  margin-top: -45px;
`;

export const AboutBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: start;
  // right: 0;
  // bottom: 0;
  // top: 100px;
  // left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 65%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const AboutInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AboutLeftContainer = styled.div`
  width: 100%;
  display: flex;
  order: 1;
  justify-content: start;
  gap: 12px;
  @media (max-width: 960px) {
    order: 2;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const AboutRightContainer = styled.div`
  width: 100%;
  order: 2;
  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 1px solid rgba(229, 9, 20, 0.1);

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  text-align: justify;
  line-height: 32px;
  margin-bottom: 42px;
  // color: ${({ theme }) => theme.text_primary + 95};
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    // background: hsla(200, 100%, 50%, 1);
    // background: linear-gradient(225deg, hsla(200, 100%, 50%, 1) 0%, hsla(223, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(200, 100%, 50%, 1) 0%, hsla(223, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(200, 100%, 50%, 1) 0%, hsla(223, 100%, 50%, 1) 100%);
    // box-shadow:  20px 20px 60px #1F2634,
    background: #E50914; /* Solid Netflix red background */
    background: linear-gradient(225deg, #E50914 0%, #8b070e 100%); /* Gradient using Netflix red and a darker shade */
    background: -moz-linear-gradient(225deg, #E50914 0%, #8b070e 100%); /* Gradient for Mozilla browsers */
    background: -webkit-linear-gradient(225deg, #E50914 0%, #8b070e 100%); /* Gradient for WebKit-based browsers */
    box-shadow: 20px 20px 60px #1F2634;

    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;

export const SpacerTop = styled.div`
  height: 51.375px;
  width: 100%;
  background: ${({ theme }) => theme.card_light};
`;

export const SpacerBottom = styled.div`
  position: relative;
  height: 111.375px;
  width: 100%;
  background: ${({ theme }) => "red"};
`;
