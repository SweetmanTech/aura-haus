import { useEffect, useState } from 'react';

const useRewardsDepositLogs = () => {
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await fetch('/api/feed');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const fetchedResults = await response.json();
        console.log('SWEETS FETCHED RESULTS', fetchedResults);
        setResults(fetchedResults);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  return { results };
};

export default useRewardsDepositLogs;
