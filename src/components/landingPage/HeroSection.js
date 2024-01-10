'use client';
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import network from '../../assets/network.jpg';

const styling = {
  backgroundStyling: {
    backgroundImage: `url(${network.src})`,
    backgroundPosition: '50% 20%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '70vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: '3% 3%',
    borderBottomRightRadius: '3% 3%',
  },
};

export default function HeroSection() {
  return (
    <div style={styling?.backgroundStyling} id='tsparticles'>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography
              variant='h3'
              textAlign={'center'}
              mb={2.5}
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
              Apache AGE
            </Typography>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
              <Icon icon='bxs:quote-left' color='#CC2095' fontSize={'2em'} />
              <Typography variant='h3' color={'white'} textAlign={'center'} sx={{ width: '80%', fontSize: { xs: '1.5em', md: '3em' } }}>
                Graph Data Processing{' '}
                <Typography
                  variant='h3'
                  component={'span'}
                  sx={{
                    backgroundcolor: 'primary',
                    backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'repeat',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: { xs: 'block', md: 'inline' },
                  }}
                >
                  &
                </Typography>{' '}
                Analytics for Relational Databases
              </Typography>
              <Icon icon='bxs:quote-right' color='#CC2095' fontSize={'2em'} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
