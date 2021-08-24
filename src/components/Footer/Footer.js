import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:samjkim11@gmail.com'>SamJKim11@gmail.com</LinkItem>
        </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Innovating one project at a time</Slogan> */}
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/AirZT11' target="_blank" rel="noopener noreferrer">
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/sam-kim-76496a5a/' target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
