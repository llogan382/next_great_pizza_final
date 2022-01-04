import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
        This is the next great pizza restaurant
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
      <p>This is the Order Submission page</p>
      <ul>
        <li>Add Details of the order here</li>

      </ul>


    </Container>
  );
};

export default Home;
