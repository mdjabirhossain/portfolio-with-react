import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/themes.js";
import NavigationBar from "./navigation/navigation.component";
import Home from "./routes/home.component";
import About from "./routes/about.component";
import Projects from "./routes/projects.component";
import Skills from "./routes/skills.component";
import Education from "./routes/education.component";
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
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
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
                <Projects />
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
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
