import Image from 'next/image';
import { Container, Text, Flex, Box } from '../../ui';

export const Header = () => {
  return (
    <Container>
      <Flex direction={'row'} justify={'between'}>
        <Flex direction={'row'} align={'center'} justify={'between'}>
          <Image width={36} height={24} src={'/coin.gif'} />

          <Text
            css={{
              margin: '0',
              color: 'white',
            }}
          >
            STX.BINGO
          </Text>
        </Flex>

        <button type="button" className="nes-btn is-success">
          CONNECT WALLET
        </button>
      </Flex>
    </Container>
  );
};
