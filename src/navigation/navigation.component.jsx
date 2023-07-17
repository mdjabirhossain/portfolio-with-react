import React from "react";
import { Fragment } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { MdModeStandby } from "react-icons/md";
import {
  Navigation,
  NavigationContainer,
  NavLogo,
  Span,
  MobileIcon,
  NavItems,
  NavLink,
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

const NavigationBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Navigation>
        <NavigationContainer>
          {/* <div className="logos-container">
          <Link to="https://github.com/skywalker-alt327">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#171515" }}
            >
              <FaGithub />
            </IconContext.Provider>
          </Link>
          <Link to="https://www.linkedin.com/in/md-jabir-hossain-1a5454192/">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#0072b1" }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </Link>
          <Link to="https://twitter.com/Hossain_M_J">
            <IconContext.Provider
              value={{ className: "logo-container", color: "#1da1f2" }}
            >
              <FaTwitter />
            </IconContext.Provider>
          </Link>
        </div> */}
          <NavLogo to="/about">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
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
            <Link className="nav-link" to="/">
              HOME
            </Link>
            <Link className="nav-link" to="/about">
              ABOUT
            </Link>
            <Link className="nav-link" to="/skills">
              SKILLS
            </Link>
            <Link className="nav-link" to="/projects">
              PROJECTS
            </Link>
            <Link className="nav-link" to="/education">
              EDUCATION
            </Link>
          </NavItems>

          <ButtonsContainer>
            <ButtonContainer>
              <GitHubButton to="https://github.com/skywalker-alt327">
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
              <GitHubButton to="https://github.com/skywalker-alt327">
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
              <GitHubButton to="https://github.com/skywalker-alt327">
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

export default NavigationBar;
