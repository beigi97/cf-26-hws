let count = 0;

function handleSubmit() {
  let userFirstName = document.querySelector("#user-first-name");
  let userLastName = document.querySelector("#user-last-name");
  let date = document.querySelector("#user-date");

  console.log(userFirstName.value);
  console.log(userLastName.value);
  console.log(date.value);

  let rawDate = date.value.trim();
  let formattedDate;

  if (/^\d{8}$/.test(rawDate)) {
    let year = rawDate.slice(0, 4);
    let month = rawDate.slice(4, 6);
    let day = rawDate.slice(6, 8);
    formattedDate = `${year}-${month}-${day}`;
  } else if (dateInput != /^\d/) {
    alert("error");
  }

  let tr = document.createElement("tr");
  tr.classList.add(
    "border-b",
    "border-gray-600",
    "odd:bg-gray-800",
    "even:bg-gray-700"
  );

  let td1 = document.createElement("td");
  td1.textContent = ++count;
  td1.classList.add("px-6", "py-4");

  let tdFirstName = document.createElement("td");
  tdFirstName.textContent = userFirstName.value;
  tdFirstName.classList.add("px-6", "py-4");

  let tdLastName = document.createElement("td");
  tdLastName.textContent = userLastName.value;
  tdLastName.classList.add("px-6", "py-4");

  let tdDate = document.createElement("td");
  tdDate.textContent = formattedDate;
  tdDate.classList.add("px-6", "py-4");

  let td2 = document.createElement("td");

  tr.appendChild(td1);
  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdDate);
  tr.appendChild(td2);

  document.querySelector("#users").appendChild(tr);

  userFirstName.value = "";
  userLastName.value = "";
  date.value = "";
}

let btn = document.querySelector("#submit-btn");
btn.addEventListener("click", handleSubmit);
