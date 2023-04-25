import { search } from "../algorithms/lineal_search";
describe("myFunction", () => {
  it("test_happy_path_contains_key", () => {
    const array = [ 1, 2, 3, 4, 5 ];
    const key = 3;
    expect(search(array, key)).toBe(2);
  });
});
