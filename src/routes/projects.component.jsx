import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButtonLeft,
  ToggleButtonMiddle,
  ToggleButtonRight,
  Divider,
} from "./projects.styled.js";
import ProjectCard from "../components/projectCard/projectCard.component.jsx";
import { projects } from "../data/data";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  const [malware, setMalware] = useState(false);
  const [webApp, setWebApp] = useState(false);
  const [mobileApp, setMobileApp] = useState(false);
  const [machineLearning, setMachineLearning] = useState(false);

  return (
    <Container id="projects">
      <Wrapper>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButtonMiddle
              active
              value="all"
              onClick={() => setToggle("all")}
            >
              All
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButtonMiddle>
          )}
          {toggle === "machine learning" ? (
            <ToggleButtonMiddle
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButtonMiddle>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButtonMiddle
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButtonMiddle>
          )}
          <Divider />
          {toggle === "mobile app" ? (
            <ToggleButtonMiddle
              active
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              MOBILE APP'S
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle
              value="mobile app"
              onClick={() => setToggle("mobile app")}
            >
              MOBILE APP'S
            </ToggleButtonMiddle>
          )}
          <Divider />
          {toggle === "malware rev" ? (
            <ToggleButtonMiddle
              active
              value="malware rev"
              onClick={() => setToggle("malware rev")}
            >
              MALWARE REV
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle
              value="malware rev"
              onClick={() => setToggle("malware rev")}
            >
              MALWARE REV
            </ToggleButtonMiddle>
          )}
          <Divider />
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

// export default Projects

// const Projects = () => {
//   return <div>Under construction</div>;
// };

export default Projects;
