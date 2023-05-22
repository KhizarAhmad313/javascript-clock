function clock() {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const period = document.getElementById("period");
  const date = document.getElementById("date");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let d = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let p = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  period.innerHTML = p;
  date.innerHTML = d;
}

setInterval(clock, 1000);
