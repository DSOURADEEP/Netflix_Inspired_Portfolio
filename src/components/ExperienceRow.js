import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    company: 'Accenture',
    role: 'Packaged App Developer Associate Intern',
    duration: 'Feb 2025 - Jun 2025',
    location: 'Pune, India',
    details: [
      'Developed a banking system backend using Java Spring Boot, creating RESTful APIs for fund transfers, account management, and transaction tracking',
      'Applied microservices architecture and followed clean code principles for scalable backend logic',
      'Collaborated in an Agile team, practicing version control (Git), documentation, and CI/CD best practices',
      'Gained hands-on experience in database design, API integration, and backend optimization'
    ],
    bgColor: '#A101FF'
  },
  {
    id: 2,
    company: 'Blackcoffer',
    role: 'Data Processing Intern',
    duration: 'Jun 2024 - Sep 2024',
    location: 'Remote',
    details: [
      'Assisted in data processing tasks, including cleaning and organizing datasets for analysis',
      'Supported the team with basic data entry, validation, and spreadsheet management',
      'Gained exposure to structured data handling and remote collaboration tools'
    ],
    bgColor: '#333333'
  }
];

const RowContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  padding: 0 4%;
`;

const Card = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.bgColor}, ${props => props.bgColor}cc);
  border-radius: 20px;
  cursor: pointer;
  padding: 3rem 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    transform: scale(0);
    transition: transform 0.5s;
  }
  
  &:hover::before {
    transform: scale(1);
  }
`;

const CompanyName = styled.h3`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Role = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 1.1rem;
  font-weight: 500;
`;

const Duration = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ExpandedModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  border-radius: 20px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  border: 1px solid rgba(255,255,255,0.1);
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, ${props => props.bgColor}, ${props => props.bgColor}cc);
  padding: 3rem 2rem 2rem;
  position: relative;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    background: rgba(229, 9, 20, 0.1);
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 8px;
    border-left: 4px solid #e50914;
  }
`;

const ExperienceRow = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };
  return (
    <>
      <RowContainer id="experience">
        <RowTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Experience
        </RowTitle>
        <CardsContainer>
          {experienceData.map((exp, index) => (
            <Card 
              key={exp.id}
              bgColor={exp.bgColor}
              onClick={() => handleCardClick(exp)}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                zIndex: 10
              }}
            >
              <CompanyName>{exp.company}</CompanyName>
              <Role>{exp.role}</Role>
              <Duration>{exp.duration}</Duration>
            </Card>
          ))}
        </CardsContainer>
      </RowContainer>
      <AnimatePresence>
        {selectedExperience && (
          <ExpandedModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader bgColor={selectedExperience.bgColor}>
                <CloseButton 
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </CloseButton>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  {selectedExperience.company}
                </h2>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, color: 'white' }}>
                  {selectedExperience.role}
                </p>
              </ModalHeader>
              
              <ModalBody>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#e5e5e5' }}>
                  {selectedExperience.duration} | {selectedExperience.location}
                </p>
                
                <DetailList>
                  {selectedExperience.details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </DetailList>
              </ModalBody>
            </ModalContent>
          </ExpandedModal>
        )}
      </AnimatePresence>
    </>
  );
};
export default ExperienceRow;