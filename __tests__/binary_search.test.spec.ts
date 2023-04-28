import { search } from "../algorithms/binary_seach";
describe("binary search", () => {
  it("find key in array", () => {
    const array = [ 1, 2, 3, 4, 5 ];
    const key = 3;
    expect(search(array, key)).toBe(2);
  });
});
