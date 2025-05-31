const screen = document.getElementById("screen");

function scroll() {
  values = screen.value;
  if (values.length > 8) {
    screen.scrollLeft == screen.scrollWidth;
  }
}

function appendValue(data) {
  if (
    data == "0" ||
    data == "+" ||
    data == "-" ||
    data == "*" ||
    data == "/" ||
    data == "%" ||
    data == "."
  ) {
    screen.value += data;
  } else if (screen.value == "0" || screen.value == "Erreur") {
    screen.value = "";
    screen.value += data;
  } else {
    screen.value += data;
  }
  scroll();
}

function clearLastValue() {
  const values = screen.value;
  let valeurs = "";
  for (let i = 0; i < values.length - 1; i++) {
    valeurs += values[i];
  }
  screen.value = valeurs;
}

function clearDisplay() {
  screen.value = "0";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Erreur";
  }
}

document.body.addEventListener("keypress", function (e) {
  if (e.key == "0") {
    appendValue("0");
  } else if (e.key == "1") {
    appendValue("1");
  } else if (e.key == "2") {
    appendValue("2");
  } else if (e.key == "3") {
    appendValue("3");
  } else if (e.key == "4") {
    appendValue("4");
  } else if (e.key == "5") {
    appendValue("5");
  } else if (e.key == "6") {
    appendValue("6");
  } else if (e.key == "7") {
    appendValue("7");
  } else if (e.key == "8") {
    appendValue("8");
  } else if (e.key == "9") {
    appendValue("9");
  } else if (e.key == "%") {
    appendValue("%");
  } else if (e.key == "*") {
    appendValue("*");
  } else if (e.key == "-") {
    appendValue("-");
  } else if (e.key == "+") {
    appendValue("+");
  } else if (e.key == "/") {
    appendValue("/");
  } else if (e.key == "." || e.key == ";" || e.key == ",") {
    appendValue(".");
  } else if (e.key == "Enter") {
    calculate();
  } else if (e.key == "c" || e.key == "C") {
    clearDisplay();
  } else {
    clearLastValue();
  }
});
