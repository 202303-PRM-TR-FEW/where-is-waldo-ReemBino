const example = [
["A", "A", "A"],
["A", "A", "A"],
["A", "B", "A"]
];

const whereIsWaldo = (matrix) => {
for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
if (matrix[i][j] === "B") {
return [i, j];
}
}
}
}

console.log(whereIsWaldo(example));
