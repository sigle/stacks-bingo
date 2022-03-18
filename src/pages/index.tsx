import type { NextPage } from 'next';
import { Header } from '../modules/layout/Header';
import { Container, Box } from '../ui';

const Home: NextPage = () => {
  return (
    <>
      <Container css={{ mt: '3%', mr: '3%', ml: '3%' }}>
        <Header />
        <Box>Deposit</Box>
      </Container>
    </>
  );
};

export default Home;