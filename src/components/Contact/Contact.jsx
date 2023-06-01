import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css';
import { Box, Typography } from '@mui/material';

export default function Contact() {
const [repoCount, setRepoCount] = useState(null);

useEffect(() => {
const fetchRepoCount = async () => {
try {
const response = await fetch('https://api.github.com/users/Baraasher');
const data = await response.json();
setRepoCount(data.public_repos);
} catch (error) {
console.error('Error fetching repository count:', error);
}
};
fetchRepoCount();
}, []);

return (
<Box className="contact-timeline flexColumnCenter">


  <a href="https://github.com/Baraasher/" target='_blank' className="contact-icon ">
    <GitHubIcon  className="ContactIcon" />
    <Typography  display="block" gutterBottom>
      Github
    </Typography>
  </a>


  <a href="https://www.linkedin.com/in/baraa-alsher/"  target='_blank' className="contact-icon ">
    <LinkedInIcon className="ContactIcon" />
    <Typography display="block" gutterBottom>
      LinkedIn
    </Typography>
  </a>


  <a href="https://www.youtube.com/@CodeWithBaraa"  target='_blank' className="contact-icon ">
    <YouTubeIcon className="ContactIcon" />
    <Typography display="block" gutterBottom>
      YouTube
    </Typography>
  </a>


  {/* <a href="https://wa.me/970593493899" className="contact-icon">
    <WhatsAppIcon className='ContactIcon' />
  </a> */}
</Box>

);
}