import { useFormStatus } from 'react-dom';
import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  // mutation is any POST/UPDATE/PATCH
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput name="name" placeholder="Name" type="text" />
          <ContactInput name="email" placeholder="Email" type="email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput (props) {
  const { pending } = useFormStatus();
  return (
    <input
    disabled={pending}
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    />
  );
}