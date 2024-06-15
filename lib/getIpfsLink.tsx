const getIpfsLink = (hash: string): string => {
  if (!hash) return '';
  return hash?.indexOf?.('ipfs://') > -1
    ? hash.replace(
        'ipfs://',
        `https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/`,
      )
    : hash;
};

export default getIpfsLink;
