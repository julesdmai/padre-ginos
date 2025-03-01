export default async function getPastOrder(orderNo) {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // 5s delay
  const response = await fetch(`/api/past-order/${orderNo}`);
  const data = await response.json();
  return data;
}
