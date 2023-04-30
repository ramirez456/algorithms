import { sort } from "../algorithms/insert_sort";

describe("insert sort", () => {
  // Tests that the function returns the correct index when given an array with multiple identical elements.
  it("test for sort array ", () => {
    const array = [ 1, 3, 2 ];
    const result = [ 1, 2, 3 ];
    expect(sort(array)).toEqual(result);
  });
});
