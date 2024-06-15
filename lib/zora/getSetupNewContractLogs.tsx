import { CHAIN_ID } from '../consts';
import { getPublicClient } from '../viem';
import { setupNewContractEventAbi } from '../abi/setup-new-contract-event';

const getSetupNewContractLogs = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: toBlock } = await publicClient.getBlock({
    blockTag: 'latest',
  });
  const blockRange = 1000000n;
  const fromBlock = toBlock - blockRange;
  return await publicClient.getLogs({
    event: setupNewContractEventAbi,
    fromBlock,
    toBlock,
    args: {
      creator: [
        '0xa49f720bf331a5e701f452321d997a01336ed315',
        '0x94734e11b78680a35b0a86ba3ce634d334d6d2a7',
        '0x6ea4e2d5667e7d8cf5052383bfd09db548d2ec3e',
      ],
    },
  });
};

export default getSetupNewContractLogs;
