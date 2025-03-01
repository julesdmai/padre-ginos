export default async function getPastOrder(orderNo) {
  const response = await fetch(`/api/past-order/${orderNo}`);
  const data = await response.json();
  return data;
}
 