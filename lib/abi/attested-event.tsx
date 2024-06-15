import { AbiEvent } from 'viem';

const attestedAventAbi = {
  type: 'event',
  name: 'Attested',
  inputs: [
    {
      type: 'address',
      name: 'recipient',
      indexed: true,
    },
    {
      type: 'address',
      name: 'attester',
      indexed: true,
    },
    {
      type: 'bytes32',
      name: 'uid',
      indexed: false,
    },
    {
      type: 'bytes32',
      name: 'schema',
      indexed: true,
    },
  ],
  outputs: [],
  anonymous: false,
} as AbiEvent;

export default attestedAventAbi;
