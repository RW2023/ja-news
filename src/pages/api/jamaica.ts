import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

// Initialize cache
const myCache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

export default async function handler(
  _req: NextApiRequest, // Prefix with underscore since it's not used
  res: NextApiResponse,
) {
  const cacheKey = 'newsData';
  const cachedData = myCache.get(cacheKey);

  if (cachedData) {
    return res.status(200).json(cachedData);
  }

try {
  const response = await axios.get(
    `https://newsdata.io/api/1/news?country=jm&apiKey=${process.env.NEWS_DATA_KEY}`,
  );
  myCache.set(cacheKey, response.data);
  res.status(200).json(response.data);
} catch (error: any) {
  // Use 'any' to bypass TypeScript's default 'unknown' type
  const errorMessage =
    error instanceof Error ? error.message : 'An unknown error occurred';
  res.status(500).json({ message: errorMessage });
}

}
