const calender = {
  days: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  getDate: new Date(),
  getDay: new Date().getDay() - 1,
  getMonth: new Date().getMonth(),
  getYear: new Date().getFullYear(),

  domToday: function () {
    // Get Current Dates
    const currentDay = this.days[this.getDay];
    const currentMonth = this.months[this.getMonth];
    console.log(currentDay, currentMonth);

    // DOM Manipulation
    document.querySelector("#current-day").innerHTML = currentDay;
    document.querySelector("#current-date").innerHTML = currentMonth;
    document.querySelector(
      "#current-month-year"
    ).innerHTML = `${currentMonth} ${this.getYear}`;
  },

  getFirstDay: function () {
    const firstDay = new Date(
      new Date().setFullYear(this.getYear, this.getMonth, 1)
    );
    console.log(firstDay);
    return firstDay;
  },

  getLastDay: function () {
    const lastDay = new Date(
      new Date().setFullYear(this.getYear, this.getMonth, 0)
    );
    console.log(lastDay);
    return lastDay;
  },

  paintFirstDate: function () {
    switch (this.getDay) {
      case 0:
        document.querySelector("#mon").innerHTML = 1;
        break;
      case 1:
        document.querySelector("#tue").innerHTML = 1;
        break;
      case 2:
        document.querySelector("#wed").innerHTML = 1;
        break;
      case 3:
        document.querySelector("#thr").innerHTML = 1;
        break;
      case 4:
        document.querySelector("#fri").innerHTML = 1;
        break;
      case 5:
        document.querySelector("#sat").innerHTML = 1;
        break;
      case 6:
        document.querySelector("#sun").innerHTML = 1;
        break;
    }
  },

  paintLastDay: function () {
    const lastDay = Number(this.getLastDay().toString().slice(8, 11));
    console.log(lastDay);
    return lastDay;
  },

  wholeDay: [],

  paintWholeDay: function () {
    for (let i = 1; i <= this.paintLastDay(); i++) {
      this.wholeDay.push(i);
    }
    for (let i = 0; i < this.wholeDay; i++) {
      const result = [...document.querySelectorAll(".date")];
      result[i].innerHTML = this.wholeDay[i];
    }
  },
};

const confirmDay =
  "#" + calender.getFirstDay().toString().slice(0, 3).toLowerCase();

function printDay() {
  if (confirmDay == document.querySelector("#sat .class")) {
    const result = [...document.querySelectorAll(".date")].slice(6);
    for (i = 0; i < calender.wholeDay.length; i++) {
      result[i].innerHTML = calender.wholeDay[i];
    }
  }
}

function init() {
  calender.domToday();
  calender.getFirstDay();
  calender.getLastDay();
  calender.paintFirstDate();
  console.log(calender.getDay);
  calender.paintLastDay();
  console.log(calender.paintWholeDay());
  printDay();
}
const wholeDay = [];
init();
