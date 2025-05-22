const numbers = [7, 1, 9, 5, 3, 2, 6, 4, 8];
sortNum(numbers);
console.log(numbers);

const names = ['tom', 'bruce', 'adam', 'zoe','clara'];
sortNames(names);
console.log(names);

//sortiert zahlen
function sortNum(numbers: number[]){
  let swapped: boolean;
  let numberofSortedElements = 0;
  do {
    swapped = false;
    for (let i = 0; i < numbers.length - 1 - numberofSortedElements; i++) {
      const j = i + 1;
      if (numbers[j] < numbers[i]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
        swapped = true;
      }
    }
    numberofSortedElements++;
  } while (swapped);
}

//sort Texts
function sortNames(names: string[]){
  let swapped: boolean;
  let numberofSortedElements = 0;
  do {
    swapped = false;
    for (let i = 0; i < names.length - 1 - numberofSortedElements; i++) {
      const j = i + 1;
      if (names[j] < names[i]) {
        const temp = names[i];
        names[i] = names[j];
        names[j] = temp;
        swapped = true;
      }
    }
    numberofSortedElements++;
  } while (swapped);
}