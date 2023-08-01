function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }


  const array = [1, 2, 3, 4, 5];
  const sum = sumArray(array);
  console.log(sum); 