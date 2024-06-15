import { VERCEL_URL } from './consts';

const getCreatorList = async () => {
  try {
    const response = await fetch(`${VERCEL_URL}/api/creators`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.creators;
  } catch (error) {
    console.error('Failed to fetch creator list:', error);
    return null;
  }
};

export default getCreatorList;
