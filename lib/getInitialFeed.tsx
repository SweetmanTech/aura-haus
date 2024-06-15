import fetchUrls from './zora/fetchUrls';
import formatRawLogs from './zora/formatRawLogs';
import getSetupNewTokenLogs from './zora/getSetupNewTokenLogs';

const getInitialFeed = async () => {
  const response = await getSetupNewTokenLogs();
  const urlsAndContracts = formatRawLogs(response);
  const filteredUrlsAndContracts = urlsAndContracts.filter(
    (entry) => entry.url !== null && entry.url !== undefined,
  );
  return await fetchUrls(filteredUrlsAndContracts as any);
};

export default getInitialFeed;
