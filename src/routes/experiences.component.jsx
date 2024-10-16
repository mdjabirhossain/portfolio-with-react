import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../components/experienceCard/experienceCard.component";
import { experiences } from "../data/data";
import { BiBriefcaseAlt } from "react-icons/bi";

const Container = styled.div`
  background-color: #121212;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  // border: 1px solid red;
  max-width: 10px;
  position: relative;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  // border: 1px solid red;
  // border-radius: 25px;
  // border: 0.2px solid #00aaff;
  // background: #161616;
  // box-shadow: rgba(23, 92, 230, 0.15) 4px 4px 4px;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 25px;
`;

const Experiences = () => {
  return (
    <Container id="experience">
      <TimelineSection>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem>
              <TimelineSeparator>
                {/* <BiBriefcaseAlt style={{ stroke: "#121212" }} /> */}
                {index !== experiences.length && (
                  <TimelineConnector
                    style={{
                      // background: "#00aaff",
                      //#0088ff
                      background: "#121212",
                      // background: "grey",
                      width: "0.1px",
                    }}
                  />
                )}
                <div style={{ color: "#121212" }}>Hello</div>
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </Container>
  );
};

export default Experiences;
