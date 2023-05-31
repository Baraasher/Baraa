import React from 'react';
import './Title.css';
import { Box, Typography, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Contact from '../Contact/Contact';
import 'animate.css';
export default function Title() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <>
      <Box className="animate__animated animate__fadeIn" sx={{ margin: '6rem 0 ' }}>
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
