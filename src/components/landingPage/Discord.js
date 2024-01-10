import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import discordImage from '../../assets/discord.png';

export default function Discord() {
  return (
    <Container maxWidth='xl' sx={{ mt: 20, overflow: 'hidden' }}>
      <Grid container alignItems={'center'}>
        <Grid item xs='12'>
          <Typography
            variant='h3'
            textAlign={'center'}
            sx={{
              mb: 10,
              backgroundcolor: 'primary',
              backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
              backgroundSize: '100%',
              backgroundRepeat: 'repeat',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Join AGE Discord
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography variant='h4'>
            Got questions?{' '}
            <Typography
              component={'span'}
              variant='h4'
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
              Let's Chat!
            </Typography>
          </Typography>
          <Typography variant='h6' mt={3}>
            Attention,{' '}
            <Typography
              component={'span'}
              variant='h6'
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
              coding maestros and curious minds!
            </Typography>{' '}
            Step into our Discord community where programming prowess meets product insights. Whether you're deep into code or simply intrigued by
            what we offer, this is your space!
          </Typography>
          <Button
            variant='contained'
            sx={{ mt: 3, backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)` }}
            endIcon={<Icon icon='bi:discord' />}
          >
            Join Discord
          </Button>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
          <Box component={'img'} src={discordImage.src} width={'90%'} />
        </Grid>
      </Grid>
    </Container>
  );
}
