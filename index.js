const length = document.querySelector("#amount");
const convertForm = document.querySelector("#from");
const convertTo = document.querySelector("#to");
const formularTitle = document.querySelector(".formular_container .title");
const formularContent = document.querySelector(".formular_container .content");
const result = document.querySelector("#result");
const selectElem = document.querySelectorAll("select");

const hints = [
  {
    sameUnit: "gives the same value",
  },
  {
    c_m: "Divide the length by 100",
  },
  {
    c_km: "Divide the length by 100000",
  },
  {
    m_c: "Multiply the length by 100",
  },
  {
    m_km: "Divide the length by 1000",
  },
  {
    km_cm: "Multiply the length by 100000",
  },
  {
    km_m: "Multiply the length by 1000",
  },
];

const units = ["meter", "kilometer"];

for (let i = 1; i >= 0; i--) {
  let option = `<option value="${units[i]}">${units[i]}</option>`;
  selectElem[0].insertAdjacentHTML("afterbegin", option);
}

for (let i = 1; i >= 0; i--) {
  let option = `<option value="${units[i]}">${units[i]}</option>`;
  selectElem[1].insertAdjacentHTML("afterbegin", option);
}

function convertUnits() {
  if (
    (convertForm.value === "centimeter" && convertTo.value === "centimeter") ||
    (convertForm.value === "meter" && convertTo.value === "meter") ||
    (convertForm.value === "kilometer" && convertTo.value === "kilometer")
  ) {
    result.value = length.value;
    formularContent.textContent = hints[0].sameUnit;
  } else if (
    convertForm.value === "centimeter" &&
    convertTo.value === "meter"
  ) {
    result.value = length.value / 100;
    formularContent.textContent = hints[1].c_m;
  } else if (
    convertForm.value === "centimeter" &&
    convertTo.value === "kilometer"
  ) {
    result.value = length.value / 100000;
    formularContent.textContent = hints[2].c_km;
  } else if (
    convertForm.value === "meter" &&
    convertTo.value === "centimeter"
  ) {
    result.value = length.value * 100;
    formularContent.textContent = hints[3].m_c;
  } else if (convertForm.value === "meter" && convertTo.value === "kilometer") {
    result.value = length.value / 1000;
    formularContent.textContent = hints[4].m_km;
  } else if (
    convertForm.value === "kilometer" &&
    convertTo.value === "centimeter"
  ) {
    result.value = length.value * 100000;
    formularContent.textContent = hints[5].km_cm;
  } else if (convertForm.value === "kilometer" && convertTo.value === "meter") {
    result.value = length.value * 1000;
    formularContent.textContent = hints[6].km_m;
  }
}

convertForm.addEventListener("change", convertUnits);
convertTo.addEventListener("change", convertUnits);
length.addEventListener("input", convertUnits);
