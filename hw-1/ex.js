function renderList(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `<li class="list-disc text-2xl text-blue-600">${i}</li>`;
  }
  const targetElement = document.querySelector("#books ul");
  targetElement.innerHTML = result;
}

function validation(str) {
  return !isNaN(parseInt(str));
}
function submit() {
  const input = document.querySelector("#books input");
  if (validation(input.value)) {
    renderList(parseInt(input.value));
  } else {
    alert("please Enter a Number");
  }
  input.value = "";
}

const btn = document.querySelector("#submit-button");
btn.addEventListener("click", submit);
