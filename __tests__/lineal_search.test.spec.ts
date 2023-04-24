
import { search } from '../algorithms/lineal_search'

describe('myFunction', () => {
     // Tests that the function returns the correct index when given an array with multiple identical elements. 
     it("test_identical_elements_array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5];
      const key = 5;
      expect(search(array, key)).toBe(4);
  });
});