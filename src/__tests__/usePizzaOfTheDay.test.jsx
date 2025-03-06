import { expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
    id: "calabrese",
    name: "The Calabrese Pizza",
    category: "Supreme",
    description: "Pizza from Calabria",
    imagee: "/public/pizzas/calabrese.webp",
    size: { S: 12.25, M: 16.25, L: 20.25 },
}

test("gives null when first called", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay());
    expect(result.current).toBeNull();
})