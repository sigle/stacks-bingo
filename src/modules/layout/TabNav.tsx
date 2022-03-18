import Image from 'next/image';
import Link from 'next/Link';
import { Container, Text, Flex } from '../../ui';

export const TabNav = (activeRoute: any) => {
  console.log(activeRoute.activeRoute);
  return (
    <Container>
      <Flex direction={'row'} justify={'between'}>
        <Flex direction={'row'} align={'center'} justify={'between'}>
          <div style={{ paddingTop: 40 }} className="nes-container is-dark">
            <Flex gap={'10'} direction={'row'}>
              <Link href="/">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <p className="title">
                    {activeRoute.activeRoute === '/' && '► '}Deposit
                  </p>
                </a>
              </Link>
              <Link href="/prizes">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <p className="title">
                    {activeRoute.activeRoute === '/prizes' && '► '}Prizes
                  </p>
                </a>
              </Link>
              <Link href="/account">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <p className="title">
                    {activeRoute.activeRoute === '/account' && '► '}Account
                  </p>
                </a>
              </Link>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};
