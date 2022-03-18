import type { NextPage } from 'next';
import { styled } from '../stitches.config';

const Box = styled('div', { background: '#bb0f0f', color: '#f6f6f6' });

const Home: NextPage = () => {
  return (
    <>
      <Box>Prizes</Box>
    </>
  );
};

export default Home;
