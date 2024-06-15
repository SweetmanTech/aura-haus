import { CHAIN_ID } from '../consts';
import { getPublicClient } from '../viem';
import { setupNewContractEventAbi } from '../abi/setup-new-contract-event';

const getSetupNewContractLogs = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: toBlock } = await publicClient.getBlock({
    blockTag: 'latest',
  });
  const blockRange = 1000n;
  const fromBlock = toBlock - blockRange;
  return await publicClient.getLogs({
    event: setupNewContractEventAbi,
    fromBlock,
    toBlock,
  });
};

export default getSetupNewContractLogs;
