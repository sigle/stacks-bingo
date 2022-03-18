import type { NextPage } from 'next';
import { styled } from '../stitches.config';

const Box = styled('div', { background: '#c7c7c7', color: '#f6f6f6' });

const Home: NextPage = () => {
  return (
    <>
      <Box>Deposit</Box>
    </>
  );
};

export default Home;
