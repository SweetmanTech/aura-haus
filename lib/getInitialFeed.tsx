import fetchUrls from './zora/fetchUrls';
import formatRawLogs from './zora/formatRawLogs';
import getSetupNewContractLogs from './zora/getSetupNewContractLogs';

const getInitialFeed = async () => {
  const response = await getSetupNewContractLogs();
  const urlsAndContracts = formatRawLogs(response);
  const filteredUrlsAndContracts = urlsAndContracts.filter(
    (entry) => entry.url !== null && entry.url !== undefined,
  );
  return await fetchUrls(filteredUrlsAndContracts as any);
};

export default getInitialFeed;
