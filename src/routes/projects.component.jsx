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
  return (
    <Container id="projects">
      <Wrapper>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButtonLeft
              active
              value="all"
              onClick={() => setToggle("all")}
            >
              All
            </ToggleButtonLeft>
          ) : (
            <ToggleButtonLeft value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButtonLeft>
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
          {toggle === "android app" ? (
            <ToggleButtonMiddle
              active
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButtonMiddle>
          ) : (
            <ToggleButtonMiddle
              value="android app"
              onClick={() => setToggle("android app")}
            >
              ANDROID APP'S
            </ToggleButtonMiddle>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButtonRight
              active
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButtonRight>
          ) : (
            <ToggleButtonRight
              value="machine learning"
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButtonRight>
          )}
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
