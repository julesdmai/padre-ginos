export default async function postContact(name, email, message) {
  const response = await fetch(`/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await  response.json();

  if (!response.ok) {
    throw new Error("Netywork response was not ok. Send help.");
  }

  return data;
}
