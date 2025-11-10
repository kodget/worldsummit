import React from 'react';
import styled from 'styled-components';

// --- Color and Font Approximation ---
const BLUE = '#1a527f'; // A deep blue, close to the image
const RED = '#c0392b'; // A strong red
const WHITE = '#ffffff';

// Using a system font that is bold and condensed for a similar feel
// In a real project, you would import a specific font like 'Oswald' or a custom one.
const FONT_FAMILY = "'Arial Black', Gadget, sans-serif";
const FONT_FAMILY_BODY = 'Arial, sans-serif';

// --- Styled Components for Layout and Appearance ---

const Container = styled.div`
  background-color: ${BLUE};
  padding-bottom: 50px; /* Add some padding at the bottom */
  box-sizing: border-box;
  text-align: center;
  font-family: ${FONT_FAMILY_BODY};
`;

const HeaderSection = styled.div`
  background-color: ${WHITE};
  padding: 50px 20px 0px 20px; /* Adjust top padding for spacing */
`;

const Title = styled.h1`
  font-size: 2.5em; /* Large size */
  color: ${BLUE};
  font-family: ${FONT_FAMILY};
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.2;
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #333333; /* Dark gray for contrast */
  max-width: 700px;
  margin: 10px auto 40px auto; /* Margin to separate from the blue section */
  padding-bottom: 20px; /* Add space between text and the blue background */
  border-bottom: 1px solid #cccccc; /* Subtle line under the text as in the image */
`;

const BlueSection = styled.div`
  padding: 50px 20px;
`;

const TopLabel = styled.p`
  color: ${WHITE};
  font-size: 1.1em;
  letter-spacing: 2px;
  margin-bottom: 15px;
  font-family: ${FONT_FAMILY_BODY};
  text-transform: uppercase;
  font-weight: bold;
`;

const Quote = styled.h2`
  color: ${WHITE};
  font-size: 2.8em; /* Large quote size */
  font-family: ${FONT_FAMILY};
  margin: 0 0 50px 0; /* Space below the quote */
  line-height: 1.2;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const RedBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; /* Space between the red boxes */
  margin-bottom: 60px;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
`;

const RedBox = styled.div`
  width: 200px; /* Fixed size for the box */
  height: 200px; /* Fixed size for the box */
  background-color: ${RED};
  border: 5px solid ${WHITE};
  box-sizing: border-box; /* Include border in width/height */

  /* Media query for smaller screens to make boxes smaller */
  @media (max-width: 900px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  }
`;

const BottomText = styled.p`
  color: ${WHITE};
  font-size: 1.5em;
  font-family: ${FONT_FAMILY_BODY};
  font-weight: bold;
  margin: 15px 0; /* Space between the two lines of text */
`;

// --- Main Component ---

const FoodIndustryPromo = () => {
  return (
    <Container>
      <HeaderSection>
        <Title>
          UNLEASH YOUR POTENTIAL IN THE WORLD'S ECONOMIC POWERHOUSE
        </Title>
        <Subtitle>
          Where leaders meet with purpose to achieve and reinforce sustainable development
        </Subtitle>
      </HeaderSection>
      <BlueSection>
        <TopLabel>
          ASIA TOP 100 LEADERS IN FOOD INDUSTRY
        </TopLabel>
        <Quote>
          "100 MINDS, ONE GLOBAL FOOD FUTURE."
        </Quote>
        <RedBoxContainer>
          <RedBox />
          <RedBox />
          <RedBox />
          <RedBox />
        </RedBoxContainer>
        <BottomText>
          "Meet the Game-Changers of the Global Food Industry."
        </BottomText>
        <BottomText>
          "Recognizing the Power Behind the World's Food Economy."
        </BottomText>
      </BlueSection>
    </Container>
  );
};

export default FoodIndustryPromo;