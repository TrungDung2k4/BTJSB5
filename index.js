// Bài 1
document.getElementById("find").onclick = () => {
  var date = +document.getElementById("date").value;
  var month = +document.getElementById("month").value;
  var year = +document.getElementById("year").value;
  var nextDate;
  var nextMonth = month;
  var nextYear = year;
  var previousDate;
  var previousMonth = month;
  var previousYear = year;
  if (month === 2) {
    if (date === 28) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        nextDate = date + 1;
      else {
        nextDate = 1;
        ++nextMonth;
      }
    } else if (date === 29) {
      nextDate = 1;
      ++nextMonth;
    } else nextDate = date + 1;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    if (date === 30) {
      nextDate = 1;
      ++nextMonth;
    } else nextDate = date + 1;
  } else {
    if (date === 31) {
      nextDate = 1;
      if (month === 12) {
        nextMonth = 1;
        ++nextYear;
      } else ++nextMonth;
    } else nextDate = date + 1;
  }
  if (month === 3) {
    if (date === 1) {
      if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
        previousDate = 29;
      else previousDate = 28;
      --previousMonth;
    } else previousDate = date - 1;
  } else if (month === 5 || month === 7 || month === 10 || month === 12) {
    if (date === 1) {
      previousDate = 30;
      --previousMonth;
    } else previousDate = date - 1;
  } else {
    if (date === 1) {
      previousDate = 31;
      if (month === 1) {
        previousMonth = 12;
        --previousYear;
      } else --previousMonth;
    } else previousDate = date - 1;
  }
  document.getElementById(
    "found"
  ).innerHTML = `${previousDate}/${previousMonth}/${previousYear} - ${nextDate}/${nextMonth}/${nextYear}`;
};
// Bài 2
document.getElementById("count").onclick = () => {
  var Month = +document.getElementById("Month").value;
  var Year = +document.getElementById("Year").value;
  var Date;
  if (Month === 2) {
    if (Year % 400 === 0 || (Year % 4 === 0 && Year % 100 !== 0)) Date = 29;
    else Date = 28;
  } else if (Month === 4 || Month === 6 || Month === 9 || Month === 11)
    Date = 30;
  else Date = 31;
  document.getElementById("counted").innerHTML = Date + " Ngày";
};
// Bài 3
document.getElementById("read").onclick = () => {
  var number = +document.getElementById("number").value;
  var hundred = parseInt(number / 100) + " trăm ";
  var dozen;
  var unit;
  if (parseInt(number / 10) % 10 === 0) dozen = "";
  else if (parseInt(number / 10) % 10 === 1) dozen = " mười ";
  else dozen = (parseInt(number / 10) % 10) + " mươi ";
  if (number % 10 === 0) unit = "";
  else if (number % 10 === 1) {
    if (parseInt(number / 10) % 10 > 1) unit = " mốt";
    else if (parseInt(number / 10) % 10 === 1) unit = " một";
    else unit = " lẻ một";
  } else if (number % 10 === 5) {
    if (parseInt(number / 10) % 10 >= 1) unit = " lăm";
    else unit = " lẻ năm";
  } else {
    if (parseInt(number / 10) % 10 >= 1) unit = number % 10;
    else unit = " lẻ " + (number % 10);
  }
  document.getElementById("readNumber").innerHTML = hundred + dozen + unit;
};
// Bài 4
document.getElementById("findStudent").onclick = () => {
  var name1 = document.getElementById("name1").value;
  var x1 = +document.getElementById("x1").value;
  var y1 = +document.getElementById("y1").value;
  var name2 = document.getElementById("name2").value;
  var x2 = +document.getElementById("x2").value;
  var y2 = +document.getElementById("y2").value;
  var name3 = document.getElementById("name3").value;
  var x3 = +document.getElementById("x3").value;
  var y3 = +document.getElementById("y3").value;
  var university = document.getElementById("university").value;
  var x4 = +document.getElementById("x4").value;
  var y4 = +document.getElementById("y4").value;
  var distance1 = Math.sqrt(Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2));
  var distance2 = Math.sqrt(Math.pow(x2 - x4, 2) + Math.pow(y2 - y4, 2));
  var distance3 = Math.sqrt(Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2));
  var maxDistance = Math.max(distance1, distance2, distance3);
  var mostFurtherStudent;
  if (maxDistance === distance1) mostFurtherStudent = name1;
  else if (maxDistance === distance2) mostFurtherStudent = name2;
  else mostFurtherStudent = name3;
  document.getElementById(
    "foundStudent"
  ).innerHTML = `Sinh viên ${mostFurtherStudent} ở xa trường ${university} nhất`;
};
