import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FaCertificate } from 'react-icons/fa';

const certifications = [
  {
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    link: 'https://drive.google.com/file/d/157MO6U92wahIjrqq-3xaKNkGgNedFy-V/view?usp=drive_link'
  },
  {
    title: 'Java Masterclass 2025',
    link: 'https://drive.google.com/file/d/1uov_68XBdJKxj3shzcQXX6rRIL0TWwt3/view?usp=drive_link'
  },
  {
    title: 'AWS Cloud Security Foundations',
    link: 'https://drive.google.com/file/d/1LHxZBNxEd2Efu8abV5nBpl3Tkr1MdeHM/view?usp=drive_link'
  },
  {
    title: 'Data Analytics Job Simulation - Deloitte',
    link: 'https://drive.google.com/file/d/1VGfka-SNh3n7ZJIO51DdA8PTNDVv0QoV/view?usp=sharing'
  }
];

const CertificationsContainer = styled.section`
  padding: 4rem 4%;
  background-color: #141414;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #e50914;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CertificationCard = styled(motion.a)`
  background: linear-gradient(135deg, rgba(229, 9, 20, 0.1), rgba(229, 9, 20, 0.05));
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(229, 9, 20, 0.3);
  text-decoration: none;
  color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #e50914;
    background: linear-gradient(135deg, rgba(229, 9, 20, 0.2), rgba(229, 9, 20, 0.1));
  }
  
  h3 {
    margin: 0;
    color: #e5e5e5;
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const CertIcon = styled.div`
  font-size: 2rem;
  color: #e50914;
`;

const Certifications = () => {
  return (
    <CertificationsContainer>
      <Title>Certifications</Title>
      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(229, 9, 20, 0.3)' }}
          >
            <CertIcon><FaCertificate /></CertIcon>
            <h3>{cert.title}</h3>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsContainer>
  );
};

export default Certifications;
