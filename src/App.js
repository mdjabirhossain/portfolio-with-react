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
  width: 100%;
  overflow-x: hidden;
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Routes>
          <Route exact path="/" element={<NavigationBar />}>
            <Route index element={<About />} />
            <Route
              path="/about"
              element={
                <Body>
                  <About />
                </Body>
              }
            />
            <Route
              path="/projects"
              element={
                <Body>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  {openModal.state && (
                    <ProjectDescription
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </Body>
              }
            />
            <Route
              path="/skills"
              element={
                <Body>
                  <Skills />
                </Body>
              }
            />
            <Route
              path="/education"
              element={
                <Body>
                  <Education />
                </Body>
              }
            />
            <Route
              path="/experiences"
              element={
                <Body>
                  <Experiences />
                </Body>
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
