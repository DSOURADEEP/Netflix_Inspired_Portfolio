import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #000;
  padding: 3rem 4% 2rem;
  color: #757575;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  h3 {
    color: #e50914;
    margin-bottom: 1rem;
  }
  
  p, li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #757575;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #e50914;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <h3>Souradeep Das</h3>
          <p>Full Stack Developer passionate about creating innovative solutions that bridge the gap between technology and user experience.</p>
          <SocialLinks>
            <SocialIcon href="https://github.com/DSOURADEEP" target="_blank"><FaGithub /></SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/souradeep-das-dgp03211407" target="_blank"><FaLinkedin /></SocialIcon>
            <SocialIcon href="mailto:dsouradeep728@gmail.com"><FaEnvelope /></SocialIcon>
          </SocialLinks>
        </Section>
        
        <Section>
          <h3>Contact Information</h3>
          <ContactInfo>
            <FaEnvelope />
            <span>dsouradeep728@gmail.com</span>
          </ContactInfo>
          <ContactInfo>
            <FaPhone />
            <span>+91 8167403847</span>
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt />
            <span>Pune, India</span>
          </ContactInfo>
        </Section>
        
      </FooterContent>
      
      <Copyright>
        <p>&copy; 2025 Souradeep Das. All rights reserved. Built with React & Framer Motion.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
