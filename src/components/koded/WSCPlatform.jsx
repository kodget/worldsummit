import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaCalendarAlt, FaHistory, FaUsers, FaStar, FaHandshake } from 'react-icons/fa'; 

// --- Color Palette and Fonts ---
const TOP_BAR_BLUE = '#01579b'; 
const BUTTON_BLUE = '#007bff'; 
const LIGHT_BLUE_ICON = '#2196f3'; 
const BLACK_TEXT = '#000000';
const WHITE_TEXT = '#ffffff';
const GRAY_NAV_TEXT = '#555555'; 
const HEADER_TITLE_BLACK = '#222222';
const BG_GRAY = '#f7f7f7'; // Background for the main body section

const FONT_FAMILY_HEAVY = "'Arial Black', Gadget, sans-serif";
const FONT_FAMILY_BODY = 'Arial, sans-serif';

// --- Global Container ---
const PageContainer = styled.div`
  font-family: ${FONT_FAMILY_BODY};
  width: 100%;
  background-color: ${WHITE_TEXT};
`;

// =======================================================
// 1. HEADER SECTION (Screenshot 2025-11-10 at 18.38.52.jpg)
// =======================================================

const HeaderContainer = styled.header`
  width: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: ${WHITE_TEXT};
`;

const TopBlueBar = styled.div`
  background-color: ${TOP_BAR_BLUE};
  color: ${WHITE_TEXT};
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85em;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-right: 8px;
    color: ${LIGHT_BLUE_ICON};
    font-size: 1.1em;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const AuthButton = styled.a`
  background-color: ${BUTTON_BLUE};
  color: ${WHITE_TEXT};
  padding: 6px 15px;
  border-radius: 3px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;
  
  &:hover { background-color: #0056b3; }
  &.login { background-color: #0d6efd; }
`;

const NavBar = styled.nav`
  padding: 10px 50px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; 
  gap: 8px;
  font-size: 0.9em;
`;

const NavLink = styled.a`
  color: ${GRAY_NAV_TEXT};
  text-decoration: none;
  font-weight: normal;
  transition: color 0.2s;
  
  &:hover { color: ${BUTTON_BLUE}; }
  &.active { font-weight: bold; color: ${BLACK_TEXT}; }
`;

const MainHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  flex-wrap: wrap; 
  text-align: center;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 900px;
`;

const TitleText = styled.h1`
  font-family: ${FONT_FAMILY_HEAVY};
  font-size: 2.2em;
  color: ${HEADER_TITLE_BLACK};
  line-height: 1.2;
  margin: 0;
  white-space: pre-line;
  text-align: ${({ align }) => align || 'center'};
  flex-shrink: 0;
`;

const ArabicTitle = styled(TitleText)`
  font-family: 'Arial', sans-serif;
  direction: rtl;
  margin-left: 20px;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

const EnglishTitle = styled(TitleText)`
  margin-right: 20px;
  @media (max-width: 1024px) {
    margin-right: 0;
  }
`;

const LogoPlaceholder = styled.div`
  width: 120px; 
  height: 120px; 
  border-radius: 50%;
  border: 1px solid #ccc;
  margin: 0 30px;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='white' stroke='#ccc' stroke-width='2'/><text x='50' y='55' font-size='20' fill='#666' text-anchor='middle'>LOGO</text></svg>"), 
              linear-gradient(135deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f);
  background-size: cover;
  background-position: center;
  // A rough mock of the circular logo's colors and pattern
`;

// --- Conference Image Placeholder ---
const ConferencePlaceholder = styled.div`
  width: calc(100% - 100px);
  max-width: 1200px;
  height: 400px; /* Approximate height of the image */
  margin: 0 auto 50px auto;
  background-color: #d0e0ff; /* Light blue/gray background to mimic the image tone */
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  color: ${BLACK_TEXT};
  font-size: 1.2em;
  font-weight: bold;
  
  @media (max-width: 768px) {
    width: calc(100% - 40px);
    height: 300px;
  }
`;


// =======================================================
// 2. BODY SECTION (Screenshot 2025-11-10 at 18.48.14.jpg)
// =======================================================

const BodySection = styled.section`
  padding: 40px 50px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${BG_GRAY};
  text-align: left;
`;

const IntroBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const IntroText = styled.p`
  font-size: 1em;
  color: ${BLACK_TEXT};
  font-weight: bold;
`;

const PhotoGalleryButton = styled.a`
  background-color: ${BUTTON_BLUE};
  color: ${WHITE_TEXT};
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  transition: background-color 0.2s;
  
  &:hover { background-color: #0056b3; }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px;

  & svg {
    font-size: 2.2em;
    color: ${BUTTON_BLUE};
    margin-bottom: 5px;
  }
  & h3 {
    font-family: ${FONT_FAMILY_HEAVY};
    font-size: 1.8em;
    color: ${BUTTON_BLUE};
    margin: 5px 0 2px 0;
    line-height: 1;
  }
  & p {
    font-size: 0.8em;
    color: ${GRAY_NAV_TEXT};
    margin: 0;
    text-transform: uppercase;
  }
`;

const DescriptionText = styled.p`
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const VideoPlaceholder = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 450px; /* Aspect ratio of typical video */
  background-color: ${BLACK_TEXT};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  color: ${WHITE_TEXT};
  font-size: 1.5em;
  
  @media (max-width: 768px) {
    height: 300px;
  }

  &::after {
    content: '▶'; /* Play button icon */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10em;
    color: rgba(255, 0, 0, 0.8);
    cursor: pointer;
  }
  
  &::before {
    content: 'Video Placeholder: Saudi Man on Screen';
    position: absolute;
    bottom: 20px;
    color: #ccc;
    font-size: 0.8em;
    font-weight: normal;
  }
`;


// --- Main Component ---
const WSCPlatform = () => {
  return (
    <PageContainer>
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
          <TitleGroup>
            <EnglishTitle align="right">
              World Summits
              <br />& Conferences
              <br />Platform
            </EnglishTitle>
            <LogoPlaceholder />
            <ArabicTitle align="left">
              المنصه الدوليه 
              <br />للمؤتمرات 
              <br />والأحداث
            </ArabicTitle>
          </TitleGroup>
        </MainHeaderContent>
      </HeaderContainer>

      {/* Conference Image Placeholder (Part of the first screenshot) */}
      <ConferencePlaceholder>
        Conference Hall Image Placeholder (Large audience, blue screen)
      </ConferencePlaceholder>

      {/* --- Body Section from Second Screenshot --- */}
      <BodySection>
        <IntroBar>
          <IntroText>
            Datamatix Established Since: May 13, 1989 34 years 1 month 13 days 23 hours 40 minutes 35 seconds
          </IntroText>
          <PhotoGalleryButton href="#">Photo Gallery</PhotoGalleryButton>
        </IntroBar>
        
        <StatsGrid>
          <StatItem>
            <FaCalendarAlt />
            <h3>36+</h3>
            <p>Years in Business</p>
          </StatItem>
          <StatItem>
            <FaHistory />
            <h3>1250+</h3>
            <p>Successful Events</p>
          </StatItem>
          <StatItem>
            <FaUsers />
            <h3>240800+</h3>
            <p>Satisfied Clients</p>
          </StatItem>
          <StatItem>
            <FaStar />
            <h3>1750+</h3>
            <p>Media Partners</p>
          </StatItem>
          <StatItem>
            <FaStar />
            <h3>1374+</h3>
            <p>Platinum Partners</p>
          </StatItem>
          <StatItem>
            <FaHandshake />
            <h3>1340+</h3>
            <p>Other Supporters</p>
          </StatItem>
        </StatsGrid>
        
        <DescriptionText>
          Asia, the fastest-growing economic powerhouse, is where tradition meets innovation, driving global industries with dynamic markets and leading technology. Its events bring together world leaders, industry experts, and visionaries to exchange ideas, forge partnerships, and fuel transformation. Join the most influential gatherings in Asia to expand your network, gain insights, and explore limitless opportunities.
        </DescriptionText>

        {/* Video Placeholder */}
        <VideoPlaceholder>
          Video Player Placeholder (0:00 / 3:00)
        </VideoPlaceholder>
      </BodySection>
    </PageContainer>
  );
};

export default WSCPlatform;