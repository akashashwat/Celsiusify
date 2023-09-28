const degree = document.getElementById("degree");
const type = document.getElementById("type");
const result = document.getElementById("result");
const result_btn = document.getElementById("result-btn");

function calcResult() {
  const tempValue = degree.value;
  const typeValue = type.value;

  if (tempValue == "") {
    alert("Empty Input Field.");
    return;
  }

  typeValue === "Celcius"
    ? (calc = ((tempValue - 32) * 5) / 9)
    : (calc = tempValue * (9 / 5) + 32);
  result.value = calc.toFixed(2);
  console.log(tempValue);
  console.log(typeValue);
}

result_btn.addEventListener("click", calcResult);
