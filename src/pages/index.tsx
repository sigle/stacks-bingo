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
        <Flex css={{ mt: '7%' }} justify={'center'} direction={'column'}>
          <TabNav activeRoute={activeRoute} />
          <Flex align="center" justify="center" direction={'column'}>
            <Text css={{ color: 'white', mt: '$10' }}>Total money pooled</Text>

            <Text
              size={'md'}
              className="nes-text is-success"
              css={{ color: 'white', mt: '$3', fontSize: '36px' }}
            >
              <i className="nes-icon star"></i> STX 80.259{' '}
              <i className="nes-icon star"></i>
            </Text>
            <Text size={'xs'} css={{ color: 'white', mt: '$3' }}>
              ($60,354)
            </Text>
            <Text css={{ color: 'white', mt: '$10' }}>
              Next cycle in: 8 days 5 hours
            </Text>

            <progress
              style={{ maxWidth: '50%' }}
              className="nes-progress is-warning"
              value="50"
              max="100"
            ></progress>

            <label for="name_field" style={{ textAlign: 'center' }}>
              <Text css={{ textAlign: 'center', color: 'white', mt: '$3' }}>
                Deposit amount
              </Text>
            </label>
            <input
              style={{ maxWidth: '25%' }}
              type="text"
              id="name_field"
              className="nes-input is-dark"
              placeholder="STX 0.00"
            ></input>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
