function search(array: number[], key:number): number {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor( left + (right -left) / 2 );
    if (array[ middle ]=== key) {
      return middle;
    } else if(key > array[ middle ]) {
      left = middle + 1;
    } else {
      right = middle -1;
    }
  }
  return -1;
}
const array = [ 1,2,3,4,5,6,7,8,9 ];
search(array,4);

export { search };
