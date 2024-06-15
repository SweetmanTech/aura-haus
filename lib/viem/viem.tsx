import { Chain, PublicClient, createPublicClient, http } from 'viem';
import getViemNetwork from './getViemNetwork';

export const getPublicClient = (chainId: number) => {
  const chain = getViemNetwork(chainId);
  const publicClient = createPublicClient({
    chain: chain as Chain,
    transport: http(`https://base-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`),
  }) as PublicClient;
  return publicClient;
};
