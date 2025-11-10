import React from 'react';
import styled from 'styled-components';

// --- Color and Font Approximation ---
const WHITE_BG = '#ffffff';
const DARK_TEXT = '#333333';
const BLUE_TEXT = '#004a99'; // From site
const RED_TEXT = '#c00'; // From site
const GRAY_BG = '#f8f8f8';
const BLUE_BUTTON = '#004a99';
const FONT_FAMILY_BODY = 'Arial, sans-serif';
const FONT_FAMILY_HEADING = "'Arial Black', Gadget, sans-serif";

// --- Styled Components ---

const Wrapper = styled.div`
  background-color: ${WHITE_BG};
  padding: 50px 0;
  font-family: ${FONT_FAMILY_BODY};
  text-align: center;
  color: ${DARK_TEXT};
`;

// --- Upcoming Events Section ---

const SectionTitle = styled.h2`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: 2.2em;
  font-weight: bold;
  color: ${DARK_TEXT};
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const EventGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 30px auto;
`;

const EventCard = styled.div`
  width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background: ${GRAY_BG};
  text-align: left;
  border-top: 5px solid ${RED_TEXT};
`;

const EventCardTag = styled.div`
  background: ${RED_TEXT};
  color: ${WHITE_BG};
  font-weight: bold;
  padding: 5px 20px;
  display: inline-block;
  margin-bottom: 15px;
  font-size: 1.1em;
`;

const EventInfo = styled.div`
  padding: 20px;
`;

const EventDate = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: ${DARK_TEXT};
  margin: 0 0 5px 0;
`;

const EventTitle = styled.h3`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: 1.3em;
  font-weight: bold;
  color: ${BLUE_TEXT};
  margin-bottom: 10px;
`;

const EventLocation = styled.p`
  font-size: 1em;
  color: ${DARK_TEXT};
  margin: 0 0 15px 0;
  font-weight: bold;
`;

const EventLink = styled.a`
  font-size: 1em;
  color: ${RED_TEXT};
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const EventOffer = styled.p`
  font-size: 1.1em;
  color: ${BLUE_TEXT};
  font-weight: bold;
  margin: 0;
`;

const MidSectionLinks = styled.div`
  margin: 30px 0;
  & > a {
    margin: 0 15px;
    font-weight: bold;
    color: ${BLUE_BUTTON};
    font-size: 1.1em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// --- Feature Grid Section ---

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

// Card for Images with Text Overlay
const FeatureCardImage = styled.div`
  position: relative;
  background: ${GRAY_BG};
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Aligns text to the bottom */
  background-size: cover;
  background-position: center;
`;

const FeatureContent = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.65); /* Dark overlay to make text readable */
  color: ${WHITE_BG};
  padding: 20px;
  text-align: left;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureTitle = styled.h4`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: 1.3em;
  text-transform: uppercase;
  margin: 0 0 10px 0;
  line-height: 1.3;
`;

const FeatureText = styled.p`
  font-size: 1em;
  margin: 0;
`;

// Card for Text-Only boxes
const FeatureCardText = styled.div`
  background: ${GRAY_BG};
  min-height: 300px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #eee;
`;

const FeatureButton = styled.a`
  display: inline-block;
  background-color: ${BLUE_BUTTON};
  color: ${WHITE_BG};
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9em;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  width: fit-content;
  
  &:hover {
    background-color: #2a7ab0;
  }
`;

// --- Main Component ---

const PromoSection = () => {
  return (
    <Wrapper>
      {/* --- UPCOMING EVENTS --- */}
      <SectionTitle>
        Upcoming Asian Continent Events
      </SectionTitle>
      <EventGrid>
        {/* Card 1, 2, 3 (Exact text from live site) */}
        {[1, 2, 3].map((i) => (
          <EventCard key={i}>
            <EventInfo>
              <EventCardTag>Event</EventCardTag>
              <EventDate>Dec 16-18 2020</EventDate>
              <EventTitle>Arabic Language Day Summit</EventTitle>
              <EventLocation>Dubai, UAE</EventLocation>
              <EventLink href="#">www.datamatixgroup.com</EventLink>
              <EventOffer>Special Offer: USD 2000</EventOffer>
            </EventInfo>
          </EventCard>
        ))}
      </EventGrid>

      {/* --- MID LINKS --- */}
      <MidSectionLinks>
        <a href="#">Go to Calendar</a>
        <a href="#">Advertise Here</a>
      </MidSectionLinks>

      {/* --- FEATURE GRID --- */}
      <FeatureGrid>
        {/* Row 1 */}
        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureTitle>Asia: Where Innovation Meets Opportunity</FeatureTitle>
            <FeatureText>Total Events Management Services</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureTitle>Shaping the Future of Global Industries</FeatureTitle>
            <FeatureText>Total Events Management Services</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        <FeatureCardText>
          <FeatureTitle>The Fastest-Growing Hub for Business and Technology</FeatureTitle>
          <FeatureButton href="#">View Organizers</FeatureButton>
        </FeatureCardText>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>Find The Most Awesome Event Organizers For The Success Of Your Event</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        {/* Row 2 */}
        <FeatureCardText>
          <FeatureTitle>Connect, Innovate, and Lead in Asia</FeatureTitle>
          <FeatureButton href="#">View Organizers</FeatureButton>
        </FeatureCardText>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>Select the Best for your Events</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        <FeatureCardText>
          <FeatureTitle>Where Tradition Fuels Tomorrow's Success</FeatureTitle>
          <FeatureButton href="#">View Organizers</FeatureButton>
        </FeatureCardText>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>Invites the World TO Attend Your Events</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        {/* Row 3 */}
        <FeatureCardText>
          <FeatureTitle>Asia's Events: The Gateway to Global Expansion</FeatureTitle>
          <FeatureButton href="#">View Organizers</FeatureButton>
        </FeatureCardText>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>Outstanding Speakers for Your Events BROWSE AND CHOOSE</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>View and Select the best Suggested Global Top 25 Airlines for Your Next Trip</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

        <FeatureCardImage style={{ backgroundImage: `url(/assets/africia-image.png)` }}>
          <FeatureContent>
            <FeatureText>View and Select the best Suggested Global Top 1000 Hotel for Your Next Trip</FeatureText>
          </FeatureContent>
        </FeatureCardImage>

      </FeatureGrid>
    </Wrapper>
  );
};

export default PromoSection;