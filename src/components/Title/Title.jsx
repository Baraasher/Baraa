import React, { useRef, useState } from 'react';
import './Title.css';
import { Box, Typography, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Contact from '../Contact/Contact';
import 'animate.css';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import emailjs from 'emailjs-com';
import { Input, Modal, Button, Text, Textarea } from '@nextui-org/react';


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

  const form = useRef();
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    console.log("closed");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mq2gcw8',
        'template_dwfj8vb',
        form.current,
        '3-e_d2w2luJgghqXO'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Box sx={{ margin: '4rem 0 ' }}>
        <div>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeModal}
            style={{ direction: 'rtl' }} // Add this line to set the right-to-left direction
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                <Text b size={18}>
                  {t('formTitle')}
                </Text>
              </Text>
            </Modal.Header>
            <Modal.Body>
              <form id='contactForm' ref={form} onSubmit={sendEmail}>
                <Input name="name" placeholder={t('name')} />
                {/* <Input name="subject" placeholder="Subject" /> */}
                <Input name="email" placeholder={t('email')} />
                <Textarea name="message" placeholder={t('typeYourMessage')} />
                <Modal.Footer>
                  <button id='contactFormSubmit' type='submit' auto onClick={closeModal}>
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <span>{t('send')}</span>
                  </button>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>

        </div>

        <Typography variant="h6" gutterBottom>
          {t('Title')}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {t('Job Title')}
        </Typography>
        <br />
        <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "2rem", flexDirection: "row" }}>
          <Stack onClick={openModal} direction="row" spacing={2}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Tooltip title={t('send email')} placement={language === 'arabic' ? 'right' : 'left'}>
                <Avatar className="Avatar" alt="Baraa Alsher" src={'https://cdn.dribbble.com/userupload/7461041/file/original-bc0db5f06f174efb4bcfdbe1d7f78f86.png?compress=1&resize=400x400'} style={{ width: 70, height: 70 }} />
              </Tooltip>
            </StyledBadge>
          </Stack>
          <Contact />
        </Box>
        <br />
        <Typography variant="body2" gutterBottom>
          {t('Description')}
        </Typography>
        <br />
        <Typography className='FollowDescription' variant="body2" display="block" gutterBottom>
          {t('Follow Description')}
        </Typography>
        <br />
        <div className='items'>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"📅 Seamlessly Capture and Enhance Your Note-Taking Experience"}>
                <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://timescape-liart.vercel.app/">
                  {t('Timescape')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://timescape-liart.vercel.app/">
                {t('Timescape')}
              </a>
            )}
          </li>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"🗒️ Effortlessly Preserve and Organize Your Notes"}>
                <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://theshortnote.netlify.app/">
                  {t('SNote')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://theshortnote.netlify.app/">
                {t('SNote')}
              </a>
            )}
          </li>
          <li className='item'>
            {!isArabic && (
              <Tooltip placement="right" title={"🟣 UI to generate linear gradients"}>
                <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://gradientscss.vercel.app/">
                  {t('Gradients CSS')}
                </a>
              </Tooltip>
            )}
            {isArabic && (
              <a id='linkItem' target='_blank' rel='noopener noreferrer' href="https://gradientscss.vercel.app/">
                {t('Gradients CSS')}
              </a>
            )}
          </li>
        </div>
        <br />
        <Typography variant="body2" gutterBottom>
          {t('mailto')}
          <a className='mailLink' id="mailLink" target='_blank' rel='noopener noreferrer' href="mailto:alsher.info@gmail.com">
            alsher.info@gmail.com
          </a>
        </Typography>
        <br />
      </Box >
    </>
  );
}
