//Task 1

const filterAndSortEvenNumbers = (x) => x.filter((x) => x % 2 === 0).sort();
console.log(filterAndSortEvenNumbers([3, 51, 3, 27, 22, 10, 32]));

//Task 2
const removeDuplicates = (x) => {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    if (!result.includes(x[i])) {
      result.push(x[i]);
    }
  }
  return result;
};

console.log(removeDuplicates([2, 2, 3, 4, 4, 55, 55]));

//Task 3
const capitalizeFirstLetter = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(".")) {
      console.log(`this is the fake arr:${arr[i]}`);
      let strResult = arr[i];
      const first = strResult[0].toUpperCase();
      const rest = strResult.slice(1);
      let newStr = first+rest;
      arr[i] = newStr; 
    }
  }
  return arr.join(" "); 
};
console.log(capitalizeFirstLetter("my name. is. meni"));

