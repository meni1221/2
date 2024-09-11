const filterAndSortEvenNumbers = (x) => x.filter((x) => x % 2 === 0).sort();
console.log(filterAndSortEvenNumbers([3, 51, 3, 27, 22, 10, 32]));

const removeDuplicates = (x) => [...new Set(x)];

console.log(removeDuplicates([2, 2, 3, 4, 4, 55, 55]));
