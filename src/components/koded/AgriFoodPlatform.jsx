import React from 'react';
import styled from 'styled-components';

// --- Image Imports (Fix for failed loading) ---
import image2 from '../../assets/dbb2b90f-03ac-450d-8501-d288a1a9c315.JPG';
import image1 from '../../assets/caa11dcb-4bbb-4d7e-95e6-fc0d89957509.JPG';
import image3 from '../../assets/5a527d45-3189-4a8c-a9cd-35a41c006198.JPG';
import image4 from '../../assets/7b11b9bf-2c01-4902-8ab6-2ee5a485bc5d.JPG';

// --- Color and Font Approximation ---
const DARK_GRAY = '#333333'; // For the top and bottom sections
// const LIGHT_GRAY = '#666666'; // Not used in this version
const WHITE = '#ffffff';
const BLUE = '#1a73e8'; // A vibrant blue, similar to the image

// Using a system font that is bold and condensed for a similar feel
const FONT_FAMILY = "'Arial Black', Gadget, sans-serif";
const FONT_FAMILY_BODY = 'Arial, sans-serif';

// --- Styled Components for Layout and Appearance ---

const PageContainer = styled.div`
  font-family: ${FONT_FAMILY_BODY};
  text-align: center;
  background-color: ${WHITE};
`;

const TopHeader = styled.div`
  background-color: ${WHITE};
  color: ${DARK_GRAY};
  padding: 15px 20px;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for the main grid */
  grid-template-rows: repeat(2, 1fr); /* 2 rows */
  gap: 0; /* No gap between grid items */
  width: 100%;
  max-width: 1200px; /* Max width to keep it centered */
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
    grid-template-rows: repeat(4, 1fr); /* 4 rows */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 column on small screens */
    grid-template-rows: repeat(8, auto); /* 8 rows for all items */
  }
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  font-family: ${FONT_FAMILY};
  font-size: 1.8em;
  padding: 20px;
  box-sizing: border-box;
  text-transform: uppercase;
  line-height: 1.3;
  min-height: 300px; /* Ensure a minimum height for all cells */

  &.image-cell {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: transparent; /* Text hidden if it's an image cell */
  }
`;

const GrayItem = styled(GridItem)`
  background-color: ${DARK_GRAY};
  color: ${WHITE};
  font-size: 1.8em;
  letter-spacing: 0.5px;
`;

const BlueItem = styled(GridItem)`
  background-color: ${BLUE};
  color: ${WHITE};
  font-size: 1.8em;
  letter-spacing: 0.5px;
`;

const BottomSection = styled.div`
  background-color: ${DARK_GRAY};
  color: ${WHITE};
  padding: 50px 20px;
`;

const BottomTitle = styled.h2`
  font-family: ${FONT_FAMILY};
  font-size: 2.2em;
  text-transform: uppercase;
  line-height: 1.3;
  max-width: 900px;
  margin: 0 auto 20px auto;
`;

const BottomText = styled.p`
  font-family: ${FONT_FAMILY_BODY};
  font-size: 1.1em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: ${WHITE}; /* Ensure text color is white */
`;

// --- Main Component ---

const AgriFoodPlatform = () => {
  return (
    <PageContainer>
      <TopHeader>
        THE WORLD AGRI AND FOOD PLATFORM
      </TopHeader>

      <GridSection>
        {/* Row 1 - Image 1 */}
        <GridItem className="image-cell" style={{ backgroundImage: `url(${image1})` }} />
        <GrayItem>
          QUALITY MEETS EXCELLENCE
        </GrayItem>
        {/* Row 1 - Image 2 */}
        <GridItem className="image-cell" style={{ backgroundImage: `url(${image2})` }} />
        <BlueItem>
          CHOOSE THE QUALITY OF FOOD
        </BlueItem>

        {/* Row 2 */}
        <BlueItem>
          CUSTOMERS CARE IF THE QUALITY IS FAIR
        </BlueItem>
        {/* Row 2 - Image 3 */}
        <GridItem className="image-cell" style={{ backgroundImage: `url(${image3})` }} />
        <GrayItem>
          DON'T FIND ANYTHING, FIND QUALITY
        </GrayItem>
        {/* Row 2 - Image 4 */}
        <GridItem className="image-cell" style={{ backgroundImage: `url(${image4})` }} />
      </GridSection>

      <BottomSection>
        <BottomTitle>
          VISIONARY LEADERS ALIGN STRATEGIES ON THE WAY FORWARD
        </BottomTitle>
        <BottomText>
          International ministerial delegations and high-level, executives unite efforts with innovators to ensure sufficient, sustainable, nutritious food for all.
        </BottomText>
      </BottomSection>
    </PageContainer>
  );
};

export default AgriFoodPlatform;