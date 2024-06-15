import { parseAbiItem } from 'viem';
import { CHAIN_ID } from '../consts';
import { getPublicClient } from '../viem';

const getSetupNewTokenLogs = async () => {
  const publicClient = getPublicClient(CHAIN_ID);
  const { number: toBlock } = await publicClient.getBlock({
    blockTag: 'latest',
  });
  const eventAbi =
    'event SetupNewToken(uint256 indexed tokenId, address indexed sender, string newURI, uint256 maxSupply)';
  const blockRange = 1000n;
  const fromBlock = toBlock - blockRange;
  return await publicClient.getLogs({
    event: parseAbiItem(eventAbi),
    fromBlock,
    toBlock,
  });
};

export default getSetupNewTokenLogs;
