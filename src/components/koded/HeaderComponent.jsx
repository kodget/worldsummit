import React from 'react';
import styled from 'styled-components';
import heroImage from '../../assets/1c8b02bf-5ee6-49da-bca9-e291fd29618e.JPG';

// --- Color Palette from the image ---
const TOP_BAR_BLUE = '#01579b'; // Darker blue for the very top bar
const BUTTON_BLUE = '#007bff'; // Blue for the buttons
const LIGHT_BLUE_ICON = '#2196f3'; // For the envelope icon
const BLACK_TEXT = '#000000';
const WHITE_TEXT = '#ffffff';
const GRAY_NAV_TEXT = '#555555'; // For the navigation links
const HEADER_TITLE_BLACK = '#222222'; // For the main header titles

// --- Font Approximation ---
const FONT_FAMILY_HEAVY = "'Arial Black', Gadget, sans-serif"; // For bold titles
const FONT_FAMILY_BODY = 'Arial, sans-serif'; // For general text

// --- Styled Components ---

const HeaderContainer = styled.header`
  font-family: ${FONT_FAMILY_BODY};
  width: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: ${WHITE_TEXT};
`;

// --- Top Blue Bar ---
const TopBlueBar = styled.div`
  background-color: ${TOP_BAR_BLUE};
  color: ${WHITE_TEXT};
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  
  & svg {
    margin-right: 8px;
    color: ${LIGHT_BLUE_ICON}; // Specific light blue for the icon
    font-size: 1.1em;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const AuthButton = styled.a`
  background-color: ${BUTTON_BLUE};
  color: ${WHITE_TEXT};
  padding: 6px 15px;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &.login {
    background-color: #0d6efd; /* Slightly different blue for Login */
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    text-align: center;
    padding: 6px 10px;
  }
`;

// --- Navigation Bar ---
const NavBar = styled.nav`
  padding: 15px 50px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  gap: 15px; /* Space between nav items */
  font-size: 0.9em;

  @media (max-width: 768px) {
    padding: 10px 20px;
    justify-content: center;
    gap: 10px;
  }
`;

const NavLink = styled.a`
  color: ${GRAY_NAV_TEXT};
  text-decoration: none;
  font-weight: normal;
  transition: color 0.2s;

  &:hover {
    color: ${BUTTON_BLUE};
  }

  &.active {
    font-weight: bold;
    color: ${BLACK_TEXT};
  }
`;

// --- Main Header Section ---
const MainHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  flex-wrap: wrap; /* Allow content to wrap */
  text-align: center; /* Default for centered content */

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const LeftTitle = styled.h1`
  font-family: ${FONT_FAMILY_HEAVY};
  font-size: 2.2em;
  color: ${HEADER_TITLE_BLACK};
  line-height: 1.2;
  margin: 0;
  text-align: right; /* Text aligns to the right of the group */
  flex-shrink: 0;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 15px;
  }
`;

const RightTitle = styled.h1`
  font-family: 'Arial', sans-serif; /* Arabic text often uses a more standard font */
  font-size: 2.2em;
  color: ${HEADER_TITLE_BLACK};
  line-height: 1.2;
  margin: 0;
  text-align: left; /* Text aligns to the left of the group */
  flex-shrink: 0;

  @media (max-width: 1024px) {
    text-align: center;
    margin-top: 15px;
  }
`;

const LogoPlaceholder = styled.div`
  width: 120px; /* Adjust size to match image */
  height: 120px; /* Adjust size to match image */
  border-radius: 50%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="white" stroke="#ccc" stroke-width="2"/><text x="50" y="55" font-size="20" fill="#666" text-anchor="middle">LOGO</text></svg>');
  background-size: cover;
  background-position: center;
  border: 1px solid #ccc;
  margin: 0 30px; /* Space around the logo */
  flex-shrink: 0;

  @media (max-width: 1024px) {
    margin: 15px 0;
  }
`;

// Using react-icons for the envelope
import { FaEnvelope } from 'react-icons/fa'; 

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      {/* Top Blue Bar */}
      <TopBlueBar>
        <ContactInfo>
          <FaEnvelope />
          <span>info@worldsummitsandconferences.com</span>
        </ContactInfo>
        <AuthButtons>
          <AuthButton href="#">Supply Directory</AuthButton>
          <AuthButton href="#">Membership</AuthButton>
          <AuthButton href="#" className="login">Login</AuthButton>
        </AuthButtons>
      </TopBlueBar>

      {/* Navigation Bar */}
      <NavBar>
        <NavLink href="#" className="active">Home</NavLink>|
        <NavLink href="#">Asia</NavLink>|
        <NavLink href="#">Africa</NavLink>|
        <NavLink href="#">North America</NavLink>|
        <NavLink href="#">South America</NavLink>|
        <NavLink href="#">Antarctica</NavLink>|
        <NavLink href="#">Europe</NavLink>|
        <NavLink href="#">Aus-NZ</NavLink>|
        <NavLink href="#">Russia</NavLink>
      </NavBar>

      {/* Main Header Content */}
      <MainHeaderContent>
        <LeftTitle>
          World Summits
          <br />& Conferences
          <br />Platform
        </LeftTitle>
        <LogoPlaceholder />
        <RightTitle>
          المنصه الدوليه 
          <br />للمؤتمرات 
          <br />والأحداث
        </RightTitle>
      </MainHeaderContent>

      {/* Hero Image */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img src={heroImage} alt="Hero Image" style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

    </HeaderContainer>
  );
};

export default HeaderComponent;