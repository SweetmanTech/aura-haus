import { parseAbiItem, parseAbi, AbiEvent } from 'viem';
import { CHAIN_ID } from '../consts';
import { getPublicClient } from '../viem';

const getSetupNewContractLogs = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: toBlock } = await publicClient.getBlock({
    blockTag: 'latest',
  });

  const eventAbi = {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'newContract',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'defaultAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'contractURI',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'royaltyMintSchedule',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'royaltyBPS',
            type: 'uint32',
          },
          {
            internalType: 'address',
            name: 'royaltyRecipient',
            type: 'address',
          },
        ],
        indexed: false,
        internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
        name: 'defaultRoyaltyConfiguration',
        type: 'tuple',
      },
    ],
    name: 'SetupNewContract',
    type: 'event',
  } as AbiEvent;

  const blockRange = 1000n;
  const fromBlock = toBlock - blockRange;

  return await publicClient.getLogs({
    event: eventAbi,
    fromBlock,
    toBlock,
  });
};

export default getSetupNewContractLogs;
