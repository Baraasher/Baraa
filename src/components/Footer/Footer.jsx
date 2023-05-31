import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
export default function Footer() {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();
    return (
        <div className="miui-footer">
            <Typography variant='caption'>© {currentYear} {t('footer')}</Typography>
        </div>
    );
}