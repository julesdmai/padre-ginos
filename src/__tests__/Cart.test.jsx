import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
    const { asFragment } = render(<Cart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
});

// // Testing the shape of the data that gets sent to API
// test("lol", () => {
//     expect({
//         id: "calabrese",
//         name: "The Calabrese Pizza",
//         category: "Supreme",
//         description: "lol pizza from Calabria",
//         size: { S: 12.25, M:16.25, L: 20.25 },
//     }).toMatchSnapshot();
// });