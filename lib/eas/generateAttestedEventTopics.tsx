import { Address, encodeEventTopics } from 'viem';
import { easAbi } from '@/lib/abi/eas';

const generateAttestedEventTopics = (attester: Address) => {
  const topics = encodeEventTopics({
    abi: easAbi,
    eventName: 'Attested',
    args: {
      attester,
    },
  });

  return topics;
};

export default generateAttestedEventTopics;
