import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import ProTip from '../../components/ProTip';
import Copyright from '../../components/Copyright';

const MyAccount: NextPage = () => {
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
      <p>This is the My Account page</p>
      <ul>
        <li>Show Orders</li>

      </ul>


    </Container>
  );
};

export default MyAccount;
