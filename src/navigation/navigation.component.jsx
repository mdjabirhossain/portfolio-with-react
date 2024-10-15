import React from "react";
import { Fragment } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";
import { Outlet, Link, NavLink } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { MdModeStandby } from "react-icons/md";
import { Bio } from "../data/data.js";
import {
  Navigation,
  NavigationContainer,
  NavLogo,
  Span,
  MobileIcon,
  NavItems,
  // NavLink,
  ButtonContainer,
  GitHubButton,
  ButtonsContainer,
  ButtonHover,
  StyledLink,
} from "./navigation.styled.js";
import { Button } from "@mui/base";
import "./button.styles.scss";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

const activeStyle = {
  color: "#ff0000", // Example text color change for the active state
  fontWeight: 500, // Example font weight change for the active state
  // Add any other styles you want to apply for the active state
};

const NavigationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navigation>
        <NavigationContainer>
          <NavLogo to="/about">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "#00aaff",
                marginBottom: "20;",
                cursor: "pointer",
              }}
            >
              <MdModeStandby size="3rem" />
              {/* <Span>Portfolio</Span> */}
            </a>
          </NavLogo>
          <MobileIcon>
            <FaBars
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </MobileIcon>
          <NavItems>
            <StyledLink href="#about">About</StyledLink>
            <StyledLink href="#experiences">Experiences</StyledLink>
            <StyledLink href="#projects">Projects</StyledLink>
            <StyledLink href="#skills">Skills</StyledLink>
            <StyledLink href="#education">Education</StyledLink>
          </NavItems>

          <ButtonsContainer>
            <ButtonContainer>
              <GitHubButton to={Bio.github}>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "22px",
                  }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </GitHubButton>
            </ButtonContainer>
            <ButtonContainer>
              <GitHubButton to={Bio.linkedin}>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "22px",
                  }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
              </GitHubButton>
            </ButtonContainer>
            <ButtonContainer>
              <GitHubButton to={Bio.twitter}>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "20px",
                  }}
                >
                  <FaTwitter />
                </IconContext.Provider>
              </GitHubButton>
            </ButtonContainer>
          </ButtonsContainer>
        </NavigationContainer>
      </Navigation>

      <Outlet />
    </>
  );
};

// const NavigationBar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#projects">Projects</a>
//         </li>
//         <li>
//           <a href="#skills">Skills</a>
//         </li>
//         <li>
//           <a href="#education">Education</a>
//         </li>
//         <li>
//           <a href="#experiences">Experiences</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default NavigationBar;
