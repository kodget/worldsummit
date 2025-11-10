import React from 'react';
import styled from 'styled-components';

// --- Color Palette and Fonts ---
const DEEP_BLUE_BG = '#01579b'; 
const WHITE_TEXT = '#ffffff';
const GREEN_ACCENT = '#388e3c'; // Used for the mock logo center

const FONT_FAMILY_HEAVY = "'Arial Black', Gadget, sans-serif";
const FONT_FAMILY_BODY = 'Arial, sans-serif';

// --- Styled Components ---

const SupportersSection = styled.section`
  font-family: ${FONT_FAMILY_BODY};
  background-color: ${DEEP_BLUE_BG};
  color: ${WHITE_TEXT};
  padding: 50px 20px;
  text-align: center;
`;

const MainTitle = styled.h2`
  font-family: ${FONT_FAMILY_HEAVY};
  font-size: 2.5em;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.4;
  max-width: 900px;
  margin: 0 auto 50px auto;

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 0 10px;
  }
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap; /* Allows logos to wrap on small screens */
  margin-bottom: 50px;
`;

const LogoContainer = styled.div`
  width: 180px;
  height: 180px;
  padding: 10px;
  border: 2px solid ${WHITE_TEXT}; /* White border around the logo */

  @media (max-width: 500px) {
    width: 140px;
    height: 140px;
  }
`;

// Placeholder component mimicking the green logo inside the white frame
const GreenLogoPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${WHITE_TEXT};
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Mocking the circular green element inside */
  &::before {
    content: '';
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background-color: ${GREEN_ACCENT};
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.5); /* Mimic the white ring effect */
  }
`;

const BottomQuote = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  line-height: 1.4;
  margin: 40px auto 0 auto;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 0 10px;
  }
`;

// --- Main Component ---

const AsiaFoodSupporters = () => {
  return (
    <SupportersSection>
      
      <MainTitle>
        "PLATFORM SUPPORTERS AND PARTNERS
        <br />OF THE ASIA FOOD INDUSTRY"
      </MainTitle>
      
      <SubTitle>
        Powering the Global Food Markets, Protecting Health, Shaping the Food Industry Future, Driving Safe, Healthy, and Sustainable Food Production for the World.
      </SubTitle>

      <LogoGrid>
        <LogoContainer>
          <GreenLogoPlaceholder />
        </LogoContainer>
        <LogoContainer>
          <GreenLogoPlaceholder />
        </LogoContainer>
        <LogoContainer>
          <GreenLogoPlaceholder />
        </LogoContainer>
        <LogoContainer>
          <GreenLogoPlaceholder />
        </LogoContainer>
      </LogoGrid>
      
      <BottomQuote>
        "Together Powering Global Food Markets and inspiring the Future of Healthy Nutrition."
      </BottomQuote>

    </SupportersSection>
  );
};

export default AsiaFoodSupporters;