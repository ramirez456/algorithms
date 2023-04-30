function sort(numbers: number[]): number[] {
  for(const index in numbers) {
    let j = parseInt(index);
    const temp = numbers[ index ];
    while(j>0 && temp < numbers[ j-1 ] ) {
      numbers[ j ] = numbers[ j-1 ];
      j--;
    }
    numbers[ j ] = temp;
  }
  return numbers;
}


sort([ 9,2,8,4,5,6,7,1,11 ]);

export { sort };
