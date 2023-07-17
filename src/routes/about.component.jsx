import aboutimg0 from "../images/maksimilen.jpeg";
import securityImg from "../images/security-image.png";
import mlImg from "../images/ml-image.jpeg";
import softwareImg from "../images/software-image.jpeg";
import AboutBgAnimation from "../components/aboutBgAnimation.component";
import { Bio } from "../data/data";
import Typewriter from "typewriter-effect";

import {
  AboutContainer,
  AboutBg,
  AboutInnerContainer,
  AboutLeftContainer,
  AboutRightContainer,
  Img,
  Title,
  TextLoop,
  Span,
  SubTitle,
  ResumeButton,
  SpacerTop,
  SpacerBottom,
} from "./about.styled.js";

const About = () => {
  return (
    <div>
      <SpacerTop />
      <AboutContainer>
        <AboutBg>
          <AboutBgAnimation />
        </AboutBg>
        <AboutInnerContainer>
          <AboutLeftContainer>
            <Img src={mlImg} />
          </AboutLeftContainer>
          <AboutRightContainer>
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </AboutRightContainer>
        </AboutInnerContainer>
      </AboutContainer>
      <SpacerBottom />
    </div>
  );
};

export default About;
