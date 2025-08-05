import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(20, 20, 20, 1) 100%
  ),
  linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 0 4%;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #e50914;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &.primary {
    background-color: #e50914;
    color: white;

    &:hover {
      background-color: #f40612;
    }
  }

  &.secondary {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    backdrop-filter: blur(10px);

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 90px;
  background: linear-gradient(45deg, #e50914, #f40612);
  border-radius: 4px;
  opacity: 0.1;
`;

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <FloatingElements>
        {[...Array(6)].map((_, i) => (
          <FloatingCard
            key={i}
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </FloatingElements>

      <ContentWrapper
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Souradeep Das
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </Subtitle>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transforming ideas into functional, user-friendly websites with expertise in 
          multiple Full Stack technologies and a solid foundation in Python and Java.
        </Description>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button className="primary" onClick={scrollToProjects}>
            <FaPlay size={14} />
            View Projects
          </Button>
          <Button className="secondary" onClick={scrollToContact}>
            <FaInfoCircle size={16} />
            More Info
          </Button>
        </ButtonContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
