// เริ่มเขียนโค้ดตรงนี้
function printStar(star) {
  let finalResult = "";
  for (let i = 1; i <= star; i++) {
    let rowResult = "";
    for (let j = 1; j <= i; j++) {
      rowResult += "*" + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(5));
