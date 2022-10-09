export async function getSensorList() {
  const res = await fetch('/mocks/sensor/sensor-info-list.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).catch(() => alert('통신에 실패하였습니다.'));

  return res.json();
}
