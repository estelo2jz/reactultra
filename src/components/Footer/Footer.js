import React from 'react';
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news ans trends
        </FooterSubHeading>
        <FooterSubText>
          You can unsubscribe at any time
        </FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  )
}

export default Footer
