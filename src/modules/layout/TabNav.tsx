import Image from 'next/image';
import Link from 'next/link';
import { Container, Text, Flex } from '../../ui';

export const TabNav = (activeRoute: any) => {
  console.log(activeRoute.activeRoute);
  return (
    <Container>
      <Flex direction={'row'} justify={'between'}>
        <Flex direction={'row'} align={'center'} justify={'between'}>
          <div
            style={{
              paddingTop: 20,
              backgroundColor: '#070707',
              borderImageRepeat: 'unset',
            }}
            className="nes-container is-dark is-rounded"
          >
            <Flex gap={'10'} direction={'row'}>
              <Link href="/">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      className="nes-radio is-dark"
                      name="answer-dark"
                      checked={activeRoute.activeRoute === '/'}
                    />
                    <span>Deposit</span>
                  </label>
                  {/* <p className="title">
                    {activeRoute.activeRoute === '/' && '► '}Deposit
                  </p> */}
                </a>
              </Link>
              <Link href="/prizes">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      className="nes-radio is-dark"
                      name="answer-dark"
                      checked={activeRoute.activeRoute === '/prizes'}
                    />
                    <span>Prizes</span>
                  </label>
                </a>
              </Link>
              <Link href="/account">
                <a
                  style={{
                    color: 'white',
                  }}
                >
                  <label>
                    <input
                      type="radio"
                      className="nes-radio is-dark"
                      name="answer-dark"
                      checked={activeRoute.activeRoute === '/account'}
                    />
                    <span>Account</span>
                  </label>
                </a>
              </Link>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};
