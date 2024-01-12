import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { footerData } from '@/utils/staticData';

const Footer = () => {
  const headingStyles = {
    backgroundcolor: 'primary',
    backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };

  const boxStyles = {
    backgroundColor: 'black',
    color: 'white',
    marginTop: '2.5rem',
    height: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  };

  return (
    <footer>
      <Box style={boxStyles}>
        <Container maxWidth='xl'>
          <Grid container spacing={5} sx={{ p: 5 }}>
            {footerData.map((section, index) => (
              <Grid key={index} item xs={12} sm={2.5}>
                <Typography variant='h5' sx={{ ...headingStyles, textAlign: { xs: 'center', md: 'left' } }}>
                  {section.title}
                </Typography>
                {section.items.map((item, idx) => (
                  <Typography key={idx} variant='body1' sx={{ p: 0.5, cursor: 'pointer', textAlign: { xs: 'center', md: 'left' } }}>
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
            <Grid item xs={12} sm={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: { xs: 'center', md: 'start' } }}>
              <Button
                variant='contained'
                endIcon={<DownloadIcon />}
                sx={{
                  display: { lg: 'flex' },
                  backgroundImage: `linear-gradient(45deg, #CE39F2, #CA0F55)`,
                }}
              >
                Download Age
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Typography textAlign={'center'} sx={{ fontSize: '13px' }} mt={1}>
          Copyright © 2023 The Apache Software Foundation.
        </Typography>
        <Typography textAlign={'center'} sx={{ fontSize: '14px' }} mt={0.5}>
          The Apache Software Foundation Apache AGE, AGE, Apache, the Apache feather, and the Apache AGE project logo are either registered trademarks
          or trademarks of the Apache Software Foundation.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
