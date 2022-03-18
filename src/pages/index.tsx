import type { NextPage } from 'next';
import { styled } from '../stitches.config';
import 'nes.css/css/nes.min.css';

const Box = styled('div', { background: '#c7c7c7', color: '#f6f6f6' });

const Home: NextPage = () => {
  return (
    <>
      <Box>Hello</Box>
    </>
  );
};

export default Home;
