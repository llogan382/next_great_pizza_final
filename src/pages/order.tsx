import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
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
      <p>This is the Order page</p>
      <ul>
        <li>Add form</li>
        <li>If not signed in, add option to sign in before order is submitted</li>
        <li>Add order submission page
          <Link href="/orderComplete">Order Complete</Link>
        </li>
      </ul>


    </Container>
  );
};

export default Home;
