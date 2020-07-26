const arr = process.argv.splice(2).reduce((pre, cur) => pre += Number(cur), 0);
console.log(arr);