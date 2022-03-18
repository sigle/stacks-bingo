import type { NextPage } from 'next';
import { styled } from '../stitches.config';

const Box = styled('div', { background: '#549e52', color: '#f6f6f6' });

const Home: NextPage = () => {
  return (
    <>
      <Box>Account</Box>
    </>
  );
};

export default Home;
