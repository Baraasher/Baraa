import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css';
export default function Contact() {
  return (
    <div className="contact-timeline">
      <a href="https://github.com/Baraasher" className="contact-icon">
        <GitHubIcon className='ContactIcon' />
      </a>
      <a href="https://www.linkedin.com/in/baraa-alsher/" className="contact-icon">
        <LinkedInIcon className='ContactIcon' />
      </a>
      <a href="https://www.youtube.com/@CodeWithBaraa" className="contact-icon">
        <YouTubeIcon className='ContactIcon' />
      </a>
      <a href="https://wa.me/970593493899" className="contact-icon">
        <WhatsAppIcon className='ContactIcon' />
      </a>
    </div>
  );
}
