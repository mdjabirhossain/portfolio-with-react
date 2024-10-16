import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) =>
    theme.text_primary}; /* Set the color from your theme */
  font-size: 18px;
  padding: 10px 20px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Change color on hover */
  }

  &:active {
    color: ${({ theme }) =>
      theme.secondary}; /* Color when the link is clicked */
  }

  @media (max-width: 960px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const Navigation = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
  display: flex;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
`;

export const NavLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 12px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
  .nav-link {
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  }
  .nav-link:hover {
    color: #00aaff;
  }

  // .nav-link: active {
  //   /* Styles applied when the link is active (corresponding to the current route) */
  //   color: #aa00ff; /* Example text color change for the active state */
  // }
  // .nav-link: active {
  //   border-bottom: 2px solid ${({ theme }) => "red"};
  // }
`;

export const NavLink = styled.a`
  // color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  // :hover {
  //   color: ${({ theme }) => "red"};
  // }
  &.hover {
    color: "red";
  }
`;

export const GitHubButton = styled(Link)`
  // border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  // color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  :hover {
    // background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    transform: scale(1.1);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(Link)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const ButtonsContainer = styled.div`
  // border: 1px solid red;
  height: 100%;
  display: flex;
  justify-content: center;
  align items: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-left: 125px;
  margin-right: -100px;
`;

export const ButtonHover = styled.div`
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// export const StyledLink = styled.a`
//   color: white;
//   :hover {
//     color: red;
//   }
// `;
