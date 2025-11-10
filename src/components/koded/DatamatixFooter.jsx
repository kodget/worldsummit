import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; 

// --- Image Import ---
// The image containing all header elements (Logo, Title, Badge)
import footerHeaderImage from '../../assets/8c9f26f5-9727-44a0-bb47-dc20bb541edc.JPG';

// --- Color and Font Approximation ---
const LIGHT_BACKGROUND = '#f5f5f5'; 
const DARK_TEXT = '#333333'; 
const ACCENT_BLUE = '#007bff'; 
const BLACK_FOOTER = '#000000'; 
const WHITE = '#ffffff'; 

const FONT_FAMILY = 'Arial, sans-serif';

// --- Styled Components for Layout and Appearance ---

const FooterContainer = styled.footer`
  font-family: ${FONT_FAMILY};
  background-color: ${LIGHT_BACKGROUND};
  color: ${DARK_TEXT};
  padding: 0;
  border-top: 1px solid #e0e0e0;
`;

// --- Top Section: Logos and Titles (Now an Image Container) ---

const TopBar = styled.div`
  display: flex;
  justify-content: center; /* Center the image */
  align-items: center;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column; /* Ensure image takes full width of container */

  @media (max-width: 900px) {
    padding: 20px 20px;
  }
`;

// New component for the header image
const HeaderImage = styled.img`
  width: 100%; /* Make the image responsive to the container width */
  max-width: 1000px; /* Adjust this max-width if needed to match the original layout */
  height: auto;
  display: block;
`;

// NOTE: The following components (LogoGroup, MainTitle, Separator, GloriousYearsBadge)
// are no longer used in the JSX because the image replaces them, but I will
// keep the styled definitions commented out for clarity.

/*
const LogoGroup = styled.div`...`;
const MainTitle = styled.div`...`;
const Separator = styled.div`...`;
const GloriousYearsBadge = styled.div`...`;
*/


// --- Middle Section: Links Grid (Unchanged) ---

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 30px 50px;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px 20px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  text-align: left;
`;

const ColumnTitle = styled.h3`
  font-size: 1.1em;
  font-weight: bold;
  color: ${DARK_TEXT};
  margin-bottom: 15px;
  text-transform: capitalize;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  font-size: 0.9em;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  & > a {
    color: ${DARK_TEXT};
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${ACCENT_BLUE};
    }
  }
`;

const LinkArrow = styled.span`
  color: ${ACCENT_BLUE};
  font-weight: bold;
  margin-right: 5px;
`;

// --- Bottom Section: Subscription and Social Media (Unchanged) ---

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
  }
`;

const SubscriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  margin-bottom: 10px;

  & p {
    font-size: 0.9em;
    margin-bottom: 8px;
  }
`;

const SubscriptionForm = styled.div`
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  background-color: #e0e0e0;
  font-size: 0.9em;
  width: 300px;
  border-radius: 4px;
  margin-right: 10px;

  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${ACCENT_BLUE};
  color: ${WHITE};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  & > a {
    font-size: 1.5em;
    color: ${DARK_TEXT};
    transition: color 0.2s;
    &:hover {
      color: ${ACCENT_BLUE};
    }
  }
`;

const SocialIconCircle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ddd; 
  color: ${WHITE};
  
  /* Specific colors for icons to match a common style */
  &.facebook { background-color: #3b5998; }
  &.twitter { background-color: #1da1f2; }
  &.instagram { background-color: #c32aa3; }
  &.linkedin { background-color: #0077b5; }
  &.youtube { background-color: #ff0000; }
`;

// --- Copyright Bar (Unchanged) ---

const CopyrightBar = styled.div`
  background-color: ${BLACK_FOOTER};
  color: ${WHITE};
  padding: 15px 50px;
  font-size: 0.8em;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

// --- Reusable Link Component (Unchanged) ---
const LinkItemComponent = ({ text }) => (
  <LinkItem>
    <LinkArrow>&gt;</LinkArrow>
    <a href="#">{text}</a>
  </LinkItem>
);


// --- Main Component ---

const DatamatixFooter = () => {
  return (
    <FooterContainer>
      
      {/* Top Bar: Replaced with single image */}
      <TopBar>
        <HeaderImage src={footerHeaderImage} alt="World Summits & Conferences Header" />
      </TopBar>

      {/* Main Links Grid */}
      <LinksGrid>
        <Column>
          <ColumnTitle>Datamatix</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Welcome" />
            <LinkItemComponent text="Who we are" />
            <LinkItemComponent text="The Platform" />
            <LinkItemComponent text="Photo Gallery" />
            <LinkItemComponent text="Testimonials" />
          </LinkList>
        </Column>
        
        <Column>
          <ColumnTitle>Events</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Conferences" />
            <LinkItemComponent text="Executives Programs" />
            <LinkItemComponent text="Round Table" />
            <LinkItemComponent text="Meetings" />
            <LinkItemComponent text="Business Delegations" />
            <LinkItemComponent text="Knowledge Exchange" />
          </LinkList>
        </Column>

        <Column>
          <ColumnTitle>Services</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Consultancies" />
            <LinkItemComponent text="Events Management" />
            <LinkItemComponent text="Business Services" />
            <LinkItemComponent text="Research" />
            <LinkItemComponent text="Business Directory" />
          </LinkList>
        </Column>

        <Column>
          <ColumnTitle>Other Platforms</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Datamatix CRM" />
            <LinkItemComponent text="ArtDatamatix" />
            <LinkItemComponent text="World Real Estate" />
            <LinkItemComponent text="World Influencers Council" />
            <LinkItemComponent text="More Platforms" />
          </LinkList>
        </Column>

        {/* --- Second Row Items --- */}
        <Column>
          <ColumnTitle>Speakers</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Celebrities" />
            <LinkItemComponent text="Keynotes" />
            <LinkItemComponent text="Speakers and Experts" />
            <LinkItemComponent text="MC's and Presenters" />
            <LinkItemComponent text="Partnership" />
          </LinkList>
        </Column>

        <Column>
          <ColumnTitle>My Trip</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="City Activities" />
            <LinkItemComponent text="Airlines" />
            <LinkItemComponent text="Shopping Malls" />
            <LinkItemComponent text="Restaurants Directory" />
            <LinkItemComponent text="Hotels" />
          </LinkList>
        </Column>

        <Column>
          <ColumnTitle>Internship</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Datamatix Internship" />
            <LinkItemComponent text="Mentoring" />
            <LinkItemComponent text="Volunteer" />
            <LinkItemComponent text="Recruitment" />
            <LinkItemComponent text="Remote Working" />
          </LinkList>
        </Column>

        <Column>
          <ColumnTitle>Media and News</ColumnTitle>
          <LinkList>
            <LinkItemComponent text="Press Releases" />
            <LinkItemComponent text="WSC TV" />
            <LinkItemComponent text="WSC Radio" />
            <LinkItemComponent text="WSC Podcast" />
            <LinkItemComponent text="WSC Interviews" />
          </LinkList>
        </Column>
      </LinksGrid>
      
      {/* Subscription and Social Media */}
      <BottomSection>
        <SubscriptionGroup>
          <p>Subscribe to our special offers</p>
          <SubscriptionForm>
            <Input type="email" placeholder="" />
            <SubmitButton>Submit</SubmitButton>
          </SubscriptionForm>
        </SubscriptionGroup>

        <SocialIcons>
          {/* Facebook */}
          <SocialIconCircle href="#" className="facebook"><FaFacebookF /></SocialIconCircle>
          {/* Instagram */}
          <SocialIconCircle href="#" className="instagram"><FaInstagram /></SocialIconCircle>
          {/* LinkedIn */}
          <SocialIconCircle href="#" className="linkedin"><FaLinkedinIn /></SocialIconCircle>
          {/* YouTube */}
          <SocialIconCircle href="#" className="youtube"><FaYoutube /></SocialIconCircle>
        </SocialIcons>
      </BottomSection>

      {/* Copyright Bar */}
      <CopyrightBar>
        2030-2025 © Datamatix Group - Copyright All Rights Reserved
      </CopyrightBar>

    </FooterContainer>
  );
};

export default DatamatixFooter;