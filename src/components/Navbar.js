import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${props => props.isScrolled ? '#141414' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4%;
  transition: background-color 0.4s;
  z-index: 1000;
`;

const Logo = styled.h1`
  color: #e50914;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    color: #e50914;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    color: #e50914;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <Logo>Souradeep Das</Logo>
      <NavLinks>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <SocialLinks>
        <SocialIcon href="https://github.com/DSOURADEEP" target="_blank"><FaGithub /></SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/souradeep-das-dgp03211407" target="_blank"><FaLinkedin /></SocialIcon>
        <SocialIcon href="mailto:dsouradeep728@gmail.com"><FaEnvelope /></SocialIcon>
      </SocialLinks>
    </Nav>
  );
};

export default Navbar;

