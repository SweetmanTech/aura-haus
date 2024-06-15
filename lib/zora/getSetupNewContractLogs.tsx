import { setupNewContractEventAbi } from '../abi/setup-new-contract-event';
import getCreatorList from '../getCreatorList';
import getLogs from '../viem/getLogs';
import getLatestBlock from '../viem/getLatestBlock';

const getSetupNewContractLogs = async () => {
  const toBlock = await getLatestBlock();
  const blockRange = 1000000n;
  const fromBlock = toBlock - blockRange;
  const creators = await getCreatorList();
  console.log('creators:', creators);
  return await getLogs({
    event: setupNewContractEventAbi,
    fromBlock,
    toBlock,
    args: {
      creator: creators,
    },
  });
};

export default getSetupNewContractLogs;
