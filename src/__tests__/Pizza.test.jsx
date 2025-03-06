import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza.jsx";

afterEach(cleanup);

test("alt text renders on Pizza image", async () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", async () => {
    const screen = render(
      <Pizza name="Some other name" description="super cool pizza"  />,
    );

    const img = screen.getByRole("img");
    expect(img.src).not.toBe("")
})