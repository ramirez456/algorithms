function search (array: number[], key: number) : number {
  for (let index=0; index< array.length; index++) {
    if (array[ index ]===key) {
      return index;
    }
  }
  return -1;
}

function arraySearch(array: number[], key: number): string {

  const position = search(array,key);

  const message = position=== -1
    ? "This key not found"
    : `This key found at ${position +1}`;

  return message;
}

const array = [ 1, 8, 3, 11, 5, 4, 7, 8, 9 ];
arraySearch(array,5);
arraySearch(array,12);

export { search };
