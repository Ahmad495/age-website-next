'use client';
import React, { useState, useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';
import { Box, Container, Grid, Typography } from '@mui/material';
import { featureImage1, featureImage2, featureImage3, featureImage4 } from '../../utils/staticData';

export default function Feature() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: '#0d0d0f',
          shininess: 21.0,
          waveHeight: 10.5,
          zoom: 0.65,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div
      style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5em',
        overflow: 'hidden',
      }}
      ref={vantaRef}
    >
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography
              variant='h3'
              textAlign={'center'}
              mt={5}
              mb={10}
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
              Key Features
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              p={5}
              sx={{
                backdropFilter: 'blur(16px) saturate(180%)',
                backgroundColor: 'rgba(255, 225, 255, 0)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.35)',
                height: '30em',
              }}
            >
              <Box component={'img'} src={featureImage1} />
              <Typography
                variant='h6'
                mt={3}
                textAlign={'center'}
                fontWeight={'bolder'}
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
                Graph Database Plugin <br />
                for PostgreSQL
              </Typography>
              <Typography variant='body1' color={'white'} mt={2.5} textAlign={'center'}>
                Gain access to query and visualize graph data in a PostgreSQL compatible relational databases
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              p={5}
              sx={{
                backdropFilter: 'blur(16px) saturate(180%)',
                backgroundColor: 'rgba(255, 225, 255, 0)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.35)',
                height: '30em',
              }}
            >
              <Box component={'img'} src={featureImage2} />
              <Typography
                variant='h6'
                mt={3}
                textAlign={'center'}
                fontWeight={'bolder'}
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
                Hybrid Queries
                <br />
                (OpenCypher And SQL)
              </Typography>
              <Typography variant='body1' color={'white'} mt={2.5} textAlign={'center'}>
                Hybrid query technology simultaneously performs the queries for relational data and graph data
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              p={5}
              sx={{
                backdropFilter: 'blur(16px) saturate(180%)',
                backgroundColor: 'rgba(255, 225, 255, 0)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.35)',
                height: '30em',
              }}
            >
              <Box component={'img'} src={featureImage3} />
              <Typography
                variant='h6'
                mt={3}
                textAlign={'center'}
                fontWeight={'bolder'}
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
                Fast Graph Query
                <br />
                Processing
              </Typography>
              <Typography variant='body1' color={'white'} mt={2.5} textAlign={'center'}>
                Achieve both fast indexing and efficient query processing.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              p={5}
              sx={{
                backdropFilter: 'blur(16px) saturate(180%)',
                backgroundColor: 'rgba(255, 225, 255, 0)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.125)',
                boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.35)',
                height: '30em',
              }}
            >
              <Box component={'img'} src={featureImage4} />
              <Typography
                variant='h6'
                mt={3}
                textAlign={'center'}
                fontWeight={'bolder'}
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
                Graph Visualization
                <br />
                and Analytics
              </Typography>
              <Typography variant='body1' color={'white'} mt={2.5} textAlign={'center'}>
                Provides visualization of graph and relational data for clearer understanding of data
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
