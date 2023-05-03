const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function render() {
  let output = "";

  const thisMonth = months[new Date().getMonth()];

  for (let month of months) {
    const active = thisMonth == month ? "active" : "";
    output += `<div class="${active}">${month}</div>`;
  }
  return output;
}

let year = new Date().getFullYear();
app.querySelector("header span").innerHTML = year;

function yearS() {
  year = year + 1;
  app.querySelector("header span").innerHTML = year;
}
function yearM() {
  year = year - 1;
  app.querySelector("header span").innerHTML = year;
}

app.querySelector("main").innerHTML = render();
