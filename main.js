let num = 1;
function getEvenNumber() {
  if (num % 2 == 0) {
    console.log(num);
  }
  if (num < 100) {
    num++;
    return getEvenNumber();
  }
}
getEvenNumber();
