import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function NewsLetter() {
  return (
    <div style={{ backgroundColor: '#FCF3F6', borderTopLeftRadius: '3% 3%', borderTopRightRadius: '3% 3%' }}>
      <Container maxWidth='xl' sx={{ mt: 20, pt: 10 }}>
        <Grid container display={'flex'} justifyContent={'center'}>
          <Grid item xs={12} display={'flex'} justifyContent={'center'}>
            <Box component={'img'} src='https://age.apache.org/static/icon-LandingMailing-b25a623ef111a8579fcfe3f25af44f66.png' />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='h3'
              textAlign={'center'}
              mt={5}
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
              Subscribe Mailing List
            </Typography>
            <Typography variant='h6' textAlign={'center'} mt={2}>
              Get help using Apache AGE or contribute to the project on our mailing lists!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <TextField
                  label='Subscribe'
                  variant='outlined'
                  sx={{ mt: 5 }}
                  InputProps={{
                    endAdornment: <EmailIcon />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  variant='contained'
                  sx={{
                    mt: { xs: 3 },
                    py: 1.8,
                    ml: 'auto',
                    backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
                  }}
                  size='large'
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container mt={10}>
          <Grid item xs={12} md={6}>
            <Typography variant='h3'>Ready to get started?</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
