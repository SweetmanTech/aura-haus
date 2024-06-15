import getLink from './getLink';
import fetchUrls from './zora/fetchUrls';
import getSetupNewTokenLogs from './zora/getSetupNewTokenLogs';

const getInitialFeed = async () => {
  const response = await getSetupNewTokenLogs();
  const urlsAndContracts = response.map((log: any, index: number) => ({
    url: getLink(log.args.newURI),
    contract: log.address,
    owner: log.args.sender,
  }));
  const filteredUrlsAndContracts = urlsAndContracts.filter(
    (entry) => entry.url !== null && entry.url !== undefined,
  );
  return await fetchUrls(filteredUrlsAndContracts as any);
};

export default getInitialFeed;
