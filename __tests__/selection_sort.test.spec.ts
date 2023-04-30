import { sort } from "../algorithms/selection_sort";
describe("selection sort", () => {
  it("sort array", () => {
    const array = [ 1,3,4,2,5,6,7 ];
    const result = [ 1,2,3,4,5,6,7 ];
    expect(sort(array)).toEqual(result);
  });
});
