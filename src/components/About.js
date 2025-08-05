import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLightbulb, FaGraduationCap, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa';

const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(229, 9, 20, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4%;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 3rem;
  color: #e50914;
  text-align: center;
  text-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e5e5e5;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const HighlightText = styled.span`
  color: #e50914;
  font-weight: 600;
`;

const InfoCards = styled(motion.div)`
  display: grid;
  gap: 1.5rem;
`;

const InfoCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(229, 9, 20, 0.1), rgba(229, 9, 20, 0.05));
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(229, 9, 20, 0.2);
  }
  
  transition: all 0.3s ease;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e50914, #f40612);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 5px 15px rgba(229, 9, 20, 0.3);
`;

const CardContent = styled.div`
  h4 {
    color: #e50914;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }
  
  p {
    color: #b3b3b3;
    margin: 0;
  }
`;

const SkillsHighlight = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const SkillBadge = styled(motion.div)`
  background: linear-gradient(135deg, #e50914, #f40612);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
`;

const About = () => {
  const skills = ['Full Stack Development', 'Python & Java', 'React.js', 'Spring Boot', 'Database Design', 'Problem Solving'];
  
  return (
    <AboutContainer id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </Title>
        
        <AboutGrid>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I'm a <HighlightText>Full Stack Developer</HighlightText> adept in multiple full-stack technologies with a solid foundation in Python and Java. I specialize in translating ideas into functional, user-friendly websites.
            </p>
            <p>
              With experience in <HighlightText>scalable backend development</HighlightText>, I have a keen eye for design and problem-solving. I'm dedicated to staying current with industry trends and believe that success in this field comes from adaptability, creativity, and continuous learning.
            </p>
            
            <SkillsHighlight
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </SkillBadge>
              ))}
            </SkillsHighlight>
          </AboutText>
          
          <InfoCards
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <InfoCard
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            >
              <IconContainer>
                <FaGraduationCap />
              </IconContainer>
              <CardContent>
                <h4>Education</h4>
                <p>B.Tech in Computer Science and Engineering</p>
                <p>SRM Institute of Science and Technology, Chennai</p>
                <p>2021 - 2025</p>
              </CardContent>
            </InfoCard>
            
            <InfoCard
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            >
              <IconContainer>
                <FaMapMarkerAlt />
              </IconContainer>
              <CardContent>
                <h4>Location</h4>
                <p>Durgapur, West Bengal, India</p>
              </CardContent>
            </InfoCard>
            
            <InfoCard
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            >
              <IconContainer>
                <FaLanguage />
              </IconContainer>
              <CardContent>
                <h4>Languages</h4>
                <p>English, Hindi, Bengali, French</p>
              </CardContent>
            </InfoCard>
          </InfoCards>
        </AboutGrid>
      </Container>
    </AboutContainer>
  );
};

export default About;
