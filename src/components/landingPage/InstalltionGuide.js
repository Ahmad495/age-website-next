import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';

export default function InstalltionGuide() {
  return (
    <Container maxWidth='xl' sx={{ mt: 20 }}>
      <Grid container spacing={5} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <Typography
            variant='h3'
            textAlign={'center'}
            sx={{
              backgroundcolor: 'primary',
              backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
              backgroundSize: '100%',
              backgroundRepeat: 'repeat',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Installation Guide
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <Typography variant='h5' textAlign={'center'} mb={10}>
            Have a question regarding installation? Here is a installation{' '}
            <Typography
              variant='h5'
              component={'span'}
              sx={{
                backgroundcolor: 'primary',
                backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
                backgroundSize: '100%',
                backgroundRepeat: 'repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              video
            </Typography>{' '}
            guide
          </Typography>
          <div class='wrapper'>
            <div class='video-main'>
              <div class='promo-video'>
                <div class='waves-block'>
                  <div class='waves wave-1'></div>
                  <div class='waves wave-2'></div>
                  <div class='waves wave-3'></div>
                </div>
              </div>
              <a href='https://www.youtube.com/embed/0-qMwpDh0CA?si=UW0gLkJG-iKUsiRI' class='video video-popup mfp-iframe' data-lity target='_blank'>
                <Icon icon='gravity-ui:play-fill' fontSize={50} />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
