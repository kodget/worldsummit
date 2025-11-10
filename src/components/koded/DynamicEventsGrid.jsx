import React from 'react';
import styled from 'styled-components';

// --- Color Palette and Fonts ---
const BLUE_TEXT = '#007bff'; // For the main blue headings and buttons
const GRAY_BACKGROUND = '#f8f8f8'; // Subtle background for the page/sections
const DARK_TEXT = '#333333';
const LIGHT_TEXT = '#666666';
const WHITE = '#ffffff';

const FONT_FAMILY_HEAVY = "'Arial Black', Gadget, sans-serif";
const FONT_FAMILY_BODY = 'Arial, sans-serif';

// --- Styled Components ---

const GridContainer = styled.section`
  font-family: ${FONT_FAMILY_BODY};
  background-color: #ffffff;
  padding: 50px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0; 
  align-items: stretch; /* Ensures columns stretch to fill available height */
  margin-bottom: 20px;

  /* Reversing columns every second row */
  &:nth-child(even) {
    & > :first-child {
      order: 2;
    }
    & > :last-child {
      order: 1;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr; /* Single column stack on smaller screens */
    margin-bottom: 40px;

    /* Reset order for small screens to maintain natural flow */
    &:nth-child(even) {
      & > * {
        order: initial !important;
      }
    }
  }
`;

const GridCell = styled.div`
  display: flex;
  padding: 40px;
  box-sizing: border-box;
  text-align: left;
  
  @media (max-width: 900px) {
    padding: 30px 20px;
  }
`;

// --- Content Cell Styles ---

const TextContent = styled(GridCell)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${GRAY_BACKGROUND};
  
  /* Reset background for alternating rows to keep the original image layout logic */
  ${GridRow}:nth-child(even) & {
    background-color: #ffffff;
  }
  ${GridRow}:nth-child(odd) & {
    background-color: #ffffff;
  }

  /* Style for the third text block which has a background */
  &:nth-child(5) { 
    background-color: ${GRAY_BACKGROUND};
  }
`;

const ImageCell = styled(GridCell)`
  background-size: cover;
  background-position: center;
  min-height: 400px; /* Ensures images have presence */
  padding: 0;

  @media (max-width: 900px) {
    min-height: 250px;
  }
`;

const MainHeading = styled.h2`
  font-family: ${FONT_FAMILY_HEAVY};
  font-size: 2.2em;
  color: ${BLUE_TEXT};
  text-transform: uppercase;
  line-height: 1.2;
  margin: 10px 0;
  
  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

const SubText = styled.p`
  font-size: 1.1em;
  color: ${DARK_TEXT};
  line-height: 1.5;
  margin-bottom: 20px;
`;

const SmallText = styled.p`
  font-size: 0.9em;
  color: ${LIGHT_TEXT};
  margin-bottom: 5px;
  
  /* Style adjustment for the fourth text block */
  ${GridRow}:last-child & {
    text-align: center;
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 50px;
  height: 3px;
  background-color: ${LIGHT_TEXT};
  margin: 10px 0;
  
  /* Centering the divider for the button section */
  ${GridRow}:nth-child(3) & {
    margin-left: 0;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  background-color: ${BLUE_TEXT};
  color: ${WHITE};
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.2s;
  margin-top: 15px;
  
  &:hover {
    background-color: #0056b3;
  }
`;


// --- Main Component ---

const DynamicEventsGrid = () => {
  const imagePlaceholderUrl = (width, height, text) => 
    `https://placehold.co/${width}x${height}/f0f0f0/000000?text=${text}`;

  return (
    <GridContainer>
      
      {/* Row 1: Text (Left) & Image (Right) */}
      <GridRow>
        <TextContent>
          <MainHeading>
            ASIA: WHERE INNOVATION MEETS OPPORTUNITY
          </MainHeading>
          <Divider />
          <SubText>
            Total Events Management Services
          </SubText>
        </TextContent>
        <ImageCell style={{ backgroundImage: `url(${imagePlaceholderUrl(600, 400, 'Large Conference Room')})` }} />
      </GridRow>
      
      {/* Row 2: Text (Right) & Image (Left) - Uses 'order' reverse */}
      <GridRow>
        <TextContent>
          <MainHeading>
            SHAPING THE FUTURE OF GLOBAL INDUSTRIES
          </MainHeading>
          <Divider />
          <SubText>
            Total Events Management Services
          </SubText>
        </TextContent>
        <ImageCell style={{ backgroundImage: `url(${imagePlaceholderUrl(600, 400, 'Auditorium Audience')})` }} />
      </GridRow>

      {/* Row 3: Text (Left, with button) & Image (Right) */}
      <GridRow>
        <TextContent>
          <SmallText>
            Find The Most Awesome Event Organizers For The Success of Your Event
          </SmallText>
          <MainHeading>
            THE FASTEST-GROWING HUB FOR BUSINESS AND TECHNOLOGY
          </MainHeading>
          <ActionButton href="#">
            View Organizers
          </ActionButton>
        </TextContent>
        <ImageCell style={{ backgroundImage: `url(${imagePlaceholderUrl(600, 400, 'Business Seminar')})` }} />
      </GridRow>
      
      {/* Row 4: Text (Right) & Image (Left) - Uses 'order' reverse */}
      <GridRow>
        <TextContent style={{ textAlign: 'center', alignItems: 'center' }}>
          <SmallText>
            Select the Best for your Events
          </SmallText>
          <MainHeading>
            CONNECT, INNOVATE, AND TRANSFORM
          </MainHeading>
          {/* Mock content for the last item, based on partial screenshot */}
          <SubText style={{ textAlign: 'center' }}>
            A dedicated platform to connect global leaders with industry innovators and future tech.
          </SubText>
        </TextContent>
        <ImageCell style={{ backgroundImage: `url(${imagePlaceholderUrl(600, 400, 'Dubai Skyline/Burj Al Arab')})` }} />
      </GridRow>

    </GridContainer>
  );
};

export default DynamicEventsGrid;