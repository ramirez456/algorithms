import { search } from "../algorithms/lineal_search";

describe("lineal search", () => {
  // Tests that the function returns the correct index when given an array with multiple identical elements.
  it("test search key in order array ", () => {
    const array = [ 9,2,8,4,5,6,7,1,11 ];
    const key = 5;
    expect(search(array, key)).toBe(4);
  });
});
