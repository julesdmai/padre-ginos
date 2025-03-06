import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

test("alt text renders on image", async () => {
    const name = "My favorite pizza";
    const src = "https://www.websitepulse.com/blog/uploads/2013/03/200.jpg"
    const screen = render(
        <Pizza name={name} image={src} description="cool browser stuff"/>
    )

    const img = await screen.getByRole("img");

    await expect.element(img).toBeInTheDocument();
    await expect.element(img).toHaveAttribute("src", src);
    await expect.element(img).toHaveAttribute("alt", name);
});