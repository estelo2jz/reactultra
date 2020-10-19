import React from 'react';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { 
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle
} from './InfoSection.elements';

function InfoSection({
  lightBg, 
  imgStart, 
  lightTopLine, 
  lightText, 
  lightTextDesc,
  primary, 
  topLine,
  headline,
  description,
  buttonLabel
 }) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <SubTitle lightTextDesc={lightTextDesc}>
                  {description}
                </SubTitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection;