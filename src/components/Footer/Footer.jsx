import React from 'react';
import './Footer.css';
import { Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Grid
      component="footer"
      className="miui-footer"
      container
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="caption">© {currentYear} {t('footer')}</Typography>
    </Grid>
  );
}
