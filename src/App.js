import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/themes.js";
import NavigationBar from "./navigation/navigation.component";
import About from "./routes/about.component";
import Projects from "./routes/projects.component";
import Skills from "./routes/skills.component";
import Education from "./routes/education.component";
import Experiences from "./routes/experiences.component.jsx";
import ProjectDescription from "./components/projectDescription/projectDescription.component.jsx";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 100vh; /* Full viewport height */
  width: 100%;
  overflow-y: scroll; /* Enable vertical scrolling */
  scroll-snap-type: y mandatory; /* Snap scrolling */
  scroll-behavior: smooth; /* Smooth scrolling effect */
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Body>
          {/* Navigation bar stays at the top */}
          <NavigationBar />

          {/* Scrollable sections for each component */}
          <div id="about">
            <About />
          </div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="projects">
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            {openModal.state && (
              <ProjectDescription
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="education">
            <Education />
          </div>
        </Body>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
