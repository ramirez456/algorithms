function swap(array: number[], x:number, y:number) {
  const temp =  array[ x ];
  array[ x ] = array[ y ];
  array[ y ] = temp;
}
function sort(numbers:number[]): number[] {
  for(let i = 0; i < numbers.length; i++) {
    let min_idx = i;
    for(let j = i + 1; j < numbers.length; j++) {

      if( numbers[ j ] < numbers[ min_idx ]) {
        min_idx = j;
      }
    }
    swap(numbers, min_idx, i);
  }
  return numbers;
}
sort([ 1,3,4,2,5,6,7 ]);

export { sort };
