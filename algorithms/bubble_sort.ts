function sort(numbers: number[]): number[] {
  for (let i=0; i < numbers.length; i++) {
    for( let j = 0; j <= numbers.length-i-1; j++) {
      if(numbers[ j ] > numbers[ j+1 ]) {
        const temp = numbers[ j ];
        numbers[ j ] = numbers[ j+1 ];
        numbers[ j+1 ]=temp;
      }
    }
  }
  return numbers;
}

sort([ 1,8,3,4,5,6,7,2 ]);

export { sort };
