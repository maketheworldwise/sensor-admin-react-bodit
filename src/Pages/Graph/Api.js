import { BASE_URL, CHANNEL_ID, API_KEY } from '../../config.js';

export async function getThingspeak(startDate, endDate) {
  const res = await fetch(
    `${BASE_URL}/${CHANNEL_ID}/feeds.json?api_key=${API_KEY}&start=${startDate}&end=${endDate}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}
