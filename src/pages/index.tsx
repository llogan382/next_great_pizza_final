import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link';
import Image from 'next/image';
import ProTip from '../components/ProTip';
import Copyright from '../components/Copyright';
import pizzaHeader from '../assets/pizza2.png';

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

        <Image src={pizzaHeader} alt="Pizza" />

        <ProTip />
        <Copyright />
      </Box>
      <p>This is the index page</p>
      <p>This will be the landing page. </p>
      <ul>
        <li>Add splash page</li>
        <li>Add order form link
          <Link href="/order">Order</Link>
        </li>
        <li>Add "My Account Page"
        <Link href="/posts/myAccount">My Account</Link>
           </li>
      </ul>

    </Container>
  );
};

export default Home;
