// เริ่มเขียนโค้ดตรงนี้
function printPattern(number) {
  let finalResult = "";
  for (let i = 1; i <= number; i++) {
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult += j + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printPattern(5));
