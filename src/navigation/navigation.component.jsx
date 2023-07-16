import React from "react";
import { Fragment } from "react";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
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
} from "./navigation.styled.js";

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
          <NavLogo to="/">
            <a
              style={{
                display: "flex",
                alignItems: "center",
                color: "black",
                marginBottom: "20;",
                cursor: "pointer",
              }}
            >
              <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
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
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink className="nav-link" to="/skills">
              SKILLS
            </NavLink>
            <NavLink className="nav-link" to="/education">
              EDUCATION
            </NavLink>
          </NavItems>
          <ButtonContainer>
            <GitHubButton to="https://github.com/skywalker-alt327">
              <IconContext.Provider
                value={{ className: "logo-container", color: "#171515" }}
              >
                <FaGithub />
              </IconContext.Provider>
            </GitHubButton>
          </ButtonContainer>
        </NavigationContainer>
      </Navigation>

      <Outlet />
    </>
  );
};

export default NavigationBar;
