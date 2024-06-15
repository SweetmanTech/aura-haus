const fetchUrls = async (entries: { url: string; contract: any; owner: string }[]) => {
  console.log('SWEETS ENTRIES', entries);
  const promises = entries.map((entry) =>
    fetch(entry.url)
      .then((response) => response.json())
      .then((data) => ({
        data,
        collectionAddress: entry.contract,
        owner: entry.owner,
      }))
      .catch((error) => {
        console.error(`Failed to fetch ${entry.url}:`, error);
        return null;
      }),
  );

  const response = await Promise.allSettled(promises);

  const filteredResponse = response
    .filter((result) => result.status === 'fulfilled' && result.value !== null)
    .map((result: any) => result.value);

  console.log('SWEETS RESPONSE', filteredResponse);
  return filteredResponse;
};

export default fetchUrls;
