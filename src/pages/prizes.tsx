import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../modules/layout/Header';
import { TabNav } from '../modules/layout/TabNav';
import { Container, Box, Flex } from '../ui';

const Home: NextPage = () => {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <>
      <Container css={{ mt: '3%', mr: '3%', ml: '3%' }}>
        <Header />
        <Flex css={{ mt: '10%' }} justify={'center'}>
          <TabNav activeRoute={activeRoute} />
        </Flex>
        <Box>Prizes</Box>
      </Container>
    </>
  );
};

export default Home;
