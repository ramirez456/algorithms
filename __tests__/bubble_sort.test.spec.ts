import { sort } from "../algorithms/bubble_sort";
describe("bubble sort", () => {
  it("order the array", () => {
    const array = [ 1, 6, 3, 4, 5, 2 ];
    const result = [ 1, 2, 3, 4, 5, 6 ];
    expect(sort(array)).toEqual(result);
  });
});
