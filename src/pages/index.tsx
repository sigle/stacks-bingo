import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Header } from '../modules/layout/Header';
import { TabNav } from '../modules/layout/TabNav';
import { Container, Box, Flex, Text } from '../ui';

const Home: NextPage = () => {
  const router = useRouter();
  const activeRoute = router.pathname;
  return (
    <>
      <Container css={{ mt: '3%', mr: '3%', ml: '3%' }}>
        <Header />
        <Flex css={{ mt: '10%' }} justify={'center'} direction={'column'}>
          <TabNav activeRoute={activeRoute} />
          <Flex justify={'center'}>
            <Text css={{ color: 'white', mt: '$10' }}>Total money pooled</Text>
            <Flex>
              <Text css={{ color: 'white', mt: '$10' }}>
                Total money pooled
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
