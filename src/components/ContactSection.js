import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const ContactContainer = styled.section`
  padding: 4rem 4%;
  background-color: #181818;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #e50914;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  color: ${(props) => (props.success ? 'lightgreen' : 'red')};
  font-weight: 500;
`;

const ContactSection = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_onzfmti',        // Your Service ID
      'template_nj0scuv',       // Your Template ID
      e.target,                 // Form reference
      'nroS8LZPoIV2Am58h'       // Your Public Key
    ).then(() => {
      setStatus('Message sent successfully!');
      e.target.reset();
    }).catch((err) => {
      console.error(err);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <ContactContainer id="contact">
      <Title>Get In Touch</Title>
      <Subtitle>I'm always open to discussing new projects and opportunities.</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <Input type="text" name="title" placeholder="Subject" required />
        <TextArea name="message" placeholder="Your Message" required />
        <SubmitButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Send Message
        </SubmitButton>
        {status && (
          <StatusMessage success={status.includes('successfully')}>
            {status}
          </StatusMessage>
        )}
      </Form>
    </ContactContainer>
  );
};

export default ContactSection;
