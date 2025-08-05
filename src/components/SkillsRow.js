import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaCloudUploadAlt, FaCode, FaDatabase, FaTimes, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiMysql, SiDocker, SiApollo } from 'react-icons/si';

const skillsData = [
  {
    id: 1,
    category: 'Backend Languages & APIs',
    bgColor: '#FF6B6B',
    icon: <FaServer />,
    skills: ['Java (OOP, multithreading)', 'Python (data handling, Flask)', 'JavaScript (ES6)', 'Spring Boot (REST APIs, JPA, scheduling, validation)', 'Flask (API endpoints, model serving)', 'Node.js (basic knowledge)']
  },
  {
    id: 2,
    category: 'DevOps & Deployment',
    bgColor: '#4ECDC4',
    icon: <FaCloudUploadAlt />,
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'Heroku', 'Render', 'Vercel', 'Docker (basic)', 'CI/CD concepts']
  },
  {
    id: 3,
    category: 'Frameworks & Libraries',
    bgColor: '#45B7D1',
    icon: <FaCode />,
    skills: ['Spring Boot', 'React.js', 'Flask', 'TensorFlow/Keras (CNNs, Grad-CAM)', 'Bootstrap (past projects)', 'Recharts']
  },
  {
    id: 4,
    category: 'Database Management',
    bgColor: '#96CEB4',
    icon: <FaDatabase />,
    skills: ['MySQL (Joins, Triggers, Stored Procedures)', 'PostgreSQL (basic)', 'H2 (testing)', 'Firebase (Auth & Realtime DB – in past projects)']
  }
];

const RowContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%);
  position: relative;
`;

const RowTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 3rem;
  padding: 0 4%;
  color: #e50914;
  text-align: center;
  text-shadow: 0 0 20px rgba(229, 9, 20, 0.3);
`;

const CardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 4%;
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.bgColor}20, ${props => props.bgColor}10);
  border-radius: 20px;
  cursor: pointer;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.bgColor}80;
  backdrop-filter: blur(5px);
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.bgColor};
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  color: #e5e5e5;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled(motion.span)`
  background: ${props => props.bgColor}40;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #e5e5e5;
  border: 1px solid ${props => props.bgColor}80;
`;

const SkillsRow = () => {
  return (
    <RowContainer id="skills">
      <RowTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </RowTitle>
      <CardsContainer
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {skillsData.map(skillCategory => (
          <Card
            key={skillCategory.id}
            bgColor={skillCategory.bgColor}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{
              scale: 1.03,
              boxShadow: `0 0 30px ${skillCategory.bgColor}40`,
              y: -5
            }}
          >
            <CategoryIcon bgColor={skillCategory.bgColor}>{skillCategory.icon}</CategoryIcon>
            <CategoryTitle>{skillCategory.category}</CategoryTitle>
            <SkillsList>
              {skillCategory.skills.map((skill, index) => (
                <SkillTag 
                  key={index} 
                  bgColor={skillCategory.bgColor}
                  whileHover={{ scale: 1.1, y: -2, background: `${skillCategory.bgColor}80` }}
                >
                  {skill}
                </SkillTag>
              ))}
            </SkillsList>
          </Card>
        ))}
      </CardsContainer>
    </RowContainer>
  );
};

export default SkillsRow;
