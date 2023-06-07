import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Contact.css';
import { Box, Typography } from '@mui/material';

export default function Contact() {
  const [repoCount, setRepoCount] = useState(null);
  const [hoverStates, setHoverStates] = useState({
    githubIcon: false,
    linkedinIcon: false,
    youtubeIcon: false,
  });

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

  const handleIconHover = (iconId, isHovered) => {
    setHoverStates((prevHoverStates) => ({
      ...prevHoverStates,
      [iconId]: isHovered,
    }));
    const githubIcon = document.getElementById('githubIcon');
    const linkedIcon = document.getElementById('linkedinIcon');
    const youtubeIcon = document.getElementById('youtubeIcon');

    switch (iconId) {
      case 'githubIcon':
        if (isHovered) {

          linkedIcon.style.opacity = '60%';
          youtubeIcon.style.opacity = '60%';

        } else {
          linkedIcon.style.opacity = '100%';
          youtubeIcon.style.opacity = '100%';
        }
        break;
      case 'linkedinIcon':
        if (isHovered) {


          githubIcon.style.opacity = '60%';
          youtubeIcon.style.opacity = '60%';
        } else {

          githubIcon.style.opacity = '100%';
          youtubeIcon.style.opacity = '100%';
        }
        break;
      case 'youtubeIcon':
        if (isHovered) {

          githubIcon.style.opacity = '60%';
          linkedIcon.style.opacity = '60%';
        } else {
          githubIcon.style.opacity = '100%';
          linkedIcon.style.opacity = '100%';
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box className="contact-timeline flexColumnCenter">


      <a
        id="githubIcon"
        href="https://github.com/Baraasher/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover('githubIcon', true)}
        onMouseLeave={() => handleIconHover('githubIcon', false)}
      >
        <GitHubIcon className={`ContactIcon ${hoverStates.githubIcon ? 'hovered' : ''}`} />
        <Typography display="block" gutterBottom>
          Github
        </Typography>
      </a>


      <a
        id="linkedinIcon"
        href="https://www.linkedin.com/in/baraa-alsher/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover('linkedinIcon', true)}
        onMouseLeave={() => handleIconHover('linkedinIcon', false)}
      >
        <LinkedInIcon className={`ContactIcon ${hoverStates.linkedinIcon ? 'hovered' : ''}`} />
        <Typography display="block" gutterBottom>
          LinkedIn
        </Typography>
      </a>

      <a
        id="youtubeIcon"
        href="https://www.youtube.com/@CodeWithBaraa"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon"
        onMouseEnter={() => handleIconHover('youtubeIcon', true)}
        onMouseLeave={() => handleIconHover('youtubeIcon', false)}
      >
        <YouTubeIcon className={`ContactIcon ${hoverStates.youtubeIcon ? 'hovered' : ''}`} />
        <Typography display="block" gutterBottom>
          YouTube
        </Typography>
      </a>
    </Box>
  );
}

