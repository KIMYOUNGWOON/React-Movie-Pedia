import axios from 'axios';

const HOST_ADDRESS = 'https://learn.codeit.kr/2130';

export async function getReviews({
  order = 'createAt',
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await axios.get(`${HOST_ADDRESS}/film-reviews?${query}`);
  return response.data;
}
