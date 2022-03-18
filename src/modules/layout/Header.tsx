import Image from 'next/image';
import { contractPrincipalCV, noneCV } from '@stacks/transactions';
import { StacksMocknet } from '@stacks/network';

import { Connect, useConnect, AuthOptions } from '@stacks/connect-react';
import { Container, Text, Flex, Box } from '../../ui';
import { userSession } from '../utils';

const network = new StacksMocknet();

export const Header = () => {
  const { doOpenAuth, doContractCall } = useConnect();

  if (userSession.isUserSignedIn()) {
    console.log({ authData: userSession.loadUserData() });
  }

  const callContract = async () => {
    doContractCall({
      network,
      contractAddress: 'ST000000000000000000002AMW42H',
      contractName: 'pox',
      functionName: 'allow-contract-caller',
      functionArgs: [
        contractPrincipalCV(
          'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
          'stacks-bingo'
        ),
        noneCV(),
      ],
      onFinish: (data) => {
        console.log(data);
      },
    });
  };

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

        <button
          type="button"
          className="nes-btn is-success"
          onClick={callContract}
        >
          DO STUFF
        </button>

        <button
          type="button"
          className="nes-btn is-success"
          onClick={() => doOpenAuth()}
        >
          CONNECT WALLET
        </button>
      </Flex>
    </Container>
  );
};
