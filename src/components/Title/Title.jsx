import React from 'react';
import './Title.css';
import { Box, Typography, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Contact from '../Contact/Contact';
import 'animate.css';

import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function Title() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const language = isArabic ? 'arabic' : 'english';

  return (
    <>
      <Box className="animate__animated animate__fadeIn" sx={{ margin: '4rem 0 ' }}>
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <a href="mailto:alsher.info@gmail.com" target='_blank'>
              <Tooltip title={t('send email')} placement={language === 'arabic' ? 'left' : 'right'}>
              <Avatar className='Avatar' alt="Baraa Alsher" src={window.location.origin + '/public/images/logo.png'} />


              </Tooltip>
            </a>
          </StyledBadge>
        </Stack>

        <br />
        <Typography variant="h4" gutterBottom>
          {t('Title')}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t('Job Title')}
        </Typography>
        <br />
        <Typography variant="body2" gutterBottom>
          {t('Description')}
        </Typography>
        <br />
        <Typography variant="body2" display="block" gutterBottom>
          {t('Follow Description')}
        </Typography>
        <br />
        <div className='items'>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"📅 Seamlessly Capture and Enhance Your Note-Taking Experience"}>
                <a id='linkItem' target='_blank' href="https://timescape-liart.vercel.app/">
                  {t('Timescape')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' href="https://timescape-liart.vercel.app/">
                {t('Timescape')}
              </a>
            )}
          </li>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"🗒️Effortlessly Preserve and Organize Your Notes"}>
                <a id='linkItem' target='_blank' href="https://shortnote.vercel.app/">
                  {t('SNote')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' href="https://shortnote.vercel.app/">
                {t('SNote')}
              </a>
            )}
          </li>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"🟣 UI to generate linear gradients"}>
                <a id='linkItem' target='_blank' href="https://gradientscss.vercel.app/">
                  {t('Gradients CSS')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' href="https://gradientscss.vercel.app/">
                {t('Gradients CSS')}
              </a>
            )}
          </li>
        </div>
        <br />
        <Typography variant="body2" gutterBottom>
          {t('mailto')}
          <a className='mailLink' target='_blank' href="mailto:alsher.info@gmail.com">
            alsher.info@gmail.com
          </a>
        </Typography>
        <br />
        <Contact />
      </Box>
    </>
  );
}
