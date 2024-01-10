'use client';
import React from 'react';
import { Container, Grid, Typography, Divider, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const styling = {
  borderStyling: {
    borderRadius: '.5em',
    mt: -10,
    backdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: ' 12px',
    boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.35)',
  },
};

export default function AboutUs() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  return (
    <Container maxWidth='xl' sx={styling.borderStyling}>
      <Grid container py={10} justifyContent={'center'}>
        <Grid item xs={12} md={5}>
          <Box>
            <Typography variant='h4' color={'#B8145A'}>
              What Is Apache AGE® ?
            </Typography>
            <Typography variant='h6' mt={6} fontWeight={'bolder'}>
              Apache AGE®{' '}
              <Typography component={'span'} variant='h6'>
                is a PostgreSQL extension that provides graph database functionality.
              </Typography>
            </Typography>
            <Typography variant='h6' mt={4}>
              The goal of{' '}
              <Typography component={'span'} variant='h6' fontWeight={'bolder'}>
                Apache AGE®
              </Typography>{' '}
              is to provide graph data processing and analytics capability to all relational databases.
            </Typography>
            <Typography variant='h6' mt={4}>
              Through Apache AGE, PostgreSQL users will gain access to graph query modeling within the existing relational database.
            </Typography>
            <Typography variant='h6' mt={4}>
              Users can read and write graph data in nodes and edges. They can also use various algorithms such as variable length and edge traversal
              when analyzing data.
            </Typography>
          </Box>
        </Grid>
        <Divider
          orientation={isSmallScreen ? 'horizontal' : 'vertical'}
          flexItem
          sx={{ mx: { md: 8 }, my: { xs: 8 }, width: { xs: '100%', md: '0%' } }}
        />
        <Grid item xs={12} md={5}>
          <Box>
            <Typography variant='h4' color={'#B8145A'}>
              What Is Apache AGE® Viewer ?
            </Typography>
            <Typography variant='h6' mt={6} fontWeight={'bolder'}>
              Apache AGE® Viewer{' '}
              <Typography component={'span'} variant='h6'>
                is a web user interface for Apache AGE that provides data visualization and exploration.
              </Typography>
            </Typography>
            <Typography variant='h6' mt={4}>
              Users can enter complex graph queries and explore the results expressed in graph and table data.
            </Typography>
            <Typography variant='h6' mt={4}>
              <Typography component={'span'} variant='h6' fontWeight={'bolder'}>
                Apache AGE® Viewer{' '}
              </Typography>
              handles large graph data. Users will be able to discover meaningful insights with the help of various graph algorithms.
            </Typography>
            <Typography variant='h6' mt={4}>
              <Typography component={'span'} variant='h6' fontWeight={'bolder'}>
                Apache AGE® Viewer
              </Typography>{' '}
              will serve as a central graph data management & development platform for Apache AGE, a graph extension which will support all relational
              databases in the future.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
