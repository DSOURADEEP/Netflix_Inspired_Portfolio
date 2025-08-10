import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGithub, FaExternalLinkAlt, FaPlay, FaTimes, FaBitcoin, FaUniversity, FaRobot, FaMicrophone, FaChartBar } from 'react-icons/fa';
import { SiSpringboot, SiTensorflow, SiJavascript, SiStreamlit, SiPytorch } from 'react-icons/si';

import kpiDashboard1 from '../images/kpi-dashboard-1.png';
import kpiDashboard2 from '../images/kpi-dashboard-2.png';
import cryptoTracker1 from '../images/Screenshot 2025-08-06 022229.png';
import cryptoTracker2 from '../images/Screenshot 2025-08-06 022251.png';
import cryptoTracker3 from '../images/Screenshot 2025-08-06 022303.png';
import ragChatbot1 from '../images/RAG-chatbot-1.png';
import aiAssistant1 from '../images/AI-assistant-1.png';
import aiAssistant2 from '../images/AI-assistant-2.png';

const projectData = [
  {
    id: 1,
    title: 'Crypto Tracker App',
    subtitle: 'Authenticated Crypto Dashboard',
    description: 'Created a real-time crypto portfolio tracker with user authentication (JWT), MySQL backend, and coin market integration. Users can log in and view price trends with visual charts.',
    techStack: ['React.js', 'Node.js', 'JWT', 'MySQL'],
    icons: [<FaBitcoin />, <FaReact />, <FaNodeJs />, <FaDatabase />],
    bgColor: '#61DAFB',
    deployedLink: 'https://cryptotracker-93xq.onrender.com/',
    images: [cryptoTracker1, cryptoTracker2, cryptoTracker3],
    icon: <FaBitcoin />
  },
  {
    id: 2,
    title: 'Full-Stack Banking System',
    subtitle: 'Transactional REST API with UI',
    description: 'Designed a complete banking solution at Accenture with features like account management, deposit/withdrawal, fund transfers, transaction logs, and a loan management system. Integrated scheduler for EMI processing and validation layers.',
    techStack: ['Spring Boot', 'React.js', 'MySQL'],
    icons: [<SiSpringboot />, <FaReact />, <FaDatabase />],
    bgColor: '#6DB33F',
    icon: <FaUniversity />
  },
  {
    id: 3,
    title: 'RAG Document ChatBot',
    subtitle: 'Retrieval-Augmented Generation (RAG)',
    description: 'A fully free Retrieval-Augmented Generation (RAG) chatbot application built with Streamlit and Hugging Face models. Upload documents (PDF, TXT, images) and chat with their contents using AI, completely free and running locally for embeddings.',
    techStack: ['Python', 'Streamlit', 'OCR', 'Data Processing', 'Natural Language Processing (NLP)', 'LangChain'],
    icons: [<FaPython />, <SiStreamlit />, <FaRobot />],
    bgColor: '#FF6B6B',
    deployedLink: 'https://rag--document--chatbot-rmryt6xwrpqp4frugamxvs.streamlit.app/',
    images: [ragChatbot1],
    icon: <FaRobot />
  },
  {
    id: 4,
    title: 'Custom AI Desktop Assistant for Windows',
    subtitle: 'AI-powered personal assistant',
    description: 'Developed a fully functional AI-powered personal assistant for Windows that integrates voice commands, automation, and AI intelligence. The assistant can open applications, search the web, control system functions, and provide real-time AI-generated responses using the OpenAI API.',
    techStack: ['Python', 'Speech Recognition', 'Pyttsx3', 'Automation', 'Tkinter'],
    icons: [<FaPython />, <FaMicrophone />],
    bgColor: '#9C27B0',
    images: [aiAssistant1, aiAssistant2],
    icon: <FaMicrophone />
  },
  {
    id: 5,
    title: 'KPI Dashboard Builder',
    subtitle: 'Visual, SQL-powered dashboard builder',
    description: 'A visual, SQL-powered dashboard builder that enables users to create, manage, and visualize business KPIs through interactive and customizable charts — all powered by real-time database queries.',
    techStack: ['TypeScript', 'CSS', 'JavaScript', 'REST APIs', 'MySQL', 'React.js', 'Apollo GraphQL', 'RESTful WebServices', 'Vite', 'React Native'],
    icons: [<FaReact />, <FaDatabase />],
    bgColor: '#4A148C',
    images: [kpiDashboard1, kpiDashboard2],
    icon: <FaChartBar />
  }
];

const RowContainer = styled.section`
  min-height: 100vh;
  padding: 8rem 0;
  background: linear-gradient(135deg, #141414 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
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
  position: relative;
  padding: 0 4%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const SecondRowContainer = styled.div`
  position: relative;
  padding: 0 4%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 992px) {
    max-width: 90%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
`;

const Card = styled(motion.div)`
  aspect-ratio: 16/9;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  background: linear-gradient(135deg, ${props => props.bgColor || '#222'}, ${props => props.bgColor ? props.bgColor + '80' : '#333'});
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
`;

const CardSubtitle = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  margin-bottom: 1rem;
`;

const ProjectIcon = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 3;
`;

const PlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(229, 9, 20, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s;
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
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  border: 1px solid rgba(255,255,255,0.1);
`;

const ModalHeader = styled.div`
  background: linear-gradient(135deg, ${props => props.bgColor || '#333'}, ${props => props.bgColor ? props.bgColor + '80' : '#444'});
  padding: 3rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
    animation: shimmer 3s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const TechTag = styled(motion.div)`
  background: linear-gradient(135deg, #e50914, #f40612);
  padding: 0.8rem 1rem;
  border-radius: 25px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
  color: white;
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);
`;

const ProjectsRow = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <RowContainer id="projects">
        <RowTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </RowTitle>
        <CardsContainer>
          {projectData.slice(0, 3).map((project, index) => (
            <Card 
              key={project.id}
              bgColor={project.bgColor}
              onClick={() => handleCardClick(project)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                zIndex: 10
              }}
              onHoverStart={() => {
                const playBtn = document.querySelector(`#play-${project.id}`);
                if (playBtn) playBtn.style.opacity = '1';
              }}
              onHoverEnd={() => {
                const playBtn = document.querySelector(`#play-${project.id}`);
                if (playBtn) playBtn.style.opacity = '0';
              }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardSubtitle>{project.subtitle}</CardSubtitle>
              </CardContent>
              <PlayButton id={`play-${project.id}`}>
                <FaPlay />
              </PlayButton>
            </Card>
          ))}
        </CardsContainer>
        <SecondRowContainer>
          {projectData.slice(3).map((project, index) => (
            <Card 
              key={project.id}
              bgColor={project.bgColor}
              onClick={() => handleCardClick(project)}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                zIndex: 10
              }}
              onHoverStart={() => {
                const playBtn = document.querySelector(`#play-${project.id}`);
                if (playBtn) playBtn.style.opacity = '1';
              }}
              onHoverEnd={() => {
                const playBtn = document.querySelector(`#play-${project.id}`);
                if (playBtn) playBtn.style.opacity = '0';
              }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardSubtitle>{project.subtitle}</CardSubtitle>
              </CardContent>
              <PlayButton id={`play-${project.id}`}>
                <FaPlay />
              </PlayButton>
            </Card>
          ))}
        </SecondRowContainer>
      </RowContainer>

      <AnimatePresence>
        {selectedProject && (
          <ExpandedModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader bgColor={selectedProject.bgColor}>
                <CloseButton
                  onClick={closeModal}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </CloseButton>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'white' }}>
                  {selectedProject.title}
                </h2>
                <p style={{ fontSize: '1.2rem', opacity: 0.9, color: 'white' }}>
                  {selectedProject.subtitle}
                </p>
              </ModalHeader>
              
              <ModalBody>
                {selectedProject.images && (
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '2rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}>
                    {selectedProject.images.map((img, i) => (
                      <div key={i} style={{ 
                        width: '45%', 
                        minWidth: '200px',
                        maxWidth: '300px',
                        height: '200px',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: 'linear-gradient(135deg, #333, #555)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#ccc',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} screenshot ${i+1}`} 
                          style={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px'
                          }} 
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                          onLoad={(e) => {
                            e.target.nextSibling.style.display = 'none';
                          }}
                        />
                        <div style={{ 
                          display: 'block',
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)'
                        }}>
                          📸 Project Screenshot {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e5e5e5' }}>
                    {selectedProject.description}
                  </p>
                </div>
                
                {selectedProject.deployedLink && 
                  <a href={selectedProject.deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: '#e50914', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem', display: 'inline-block', marginBottom: '2rem' }}>
                    <FaExternalLinkAlt style={{ marginRight: '0.5rem' }}/>
                    View Live Project
                  </a>
                }

                <h3 style={{ color: '#e50914', marginBottom: '1rem' }}>Technologies Used</h3>
                <TechGrid>
                  {selectedProject.techStack.map((tech, index) => (
                    <TechTag
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechGrid>
              </ModalBody>
            </ModalContent>
          </ExpandedModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsRow;
