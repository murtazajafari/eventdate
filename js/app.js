function disbalePastDate() {
  var input = document.getElementById("datepicker");
  var now = new Date();
  var nowDay = new String(now.getDate() + 1); // Disable todays date as well
  var nowMonth = new String(now.getMonth() + 1); //January is 0!
  var nowYear = now.getFullYear();

  if (nowDay.length < 2) {
    nowDay = "0" + nowDay;
  }
  if (nowMonth.length < 2) {
    nowMonth = "0" + nowMonth;
  }

  var todayDate = new String(nowYear + "-" + nowMonth + "-" + nowDay);

  input.disabled = false;
  input.setAttribute("min", todayDate);
}
disbalePastDate();

function showResult() {
  var datepicker = document.getElementById("datepicker").value;
  var newdatepicker = new Date(datepicker);

  var eventYear = newdatepicker.getFullYear();
  var eventMonth = newdatepicker.getMonth() + 1;
  var eventDay = newdatepicker.getDate();

  function countDown() {
    var today = new Date();

    var eventDate = new Date(
      eventMonth + " " + eventDay + ", " + eventYear + " 00:00:00"
    );

    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var sec = Math.floor(remTime / 1000);
    var min = Math.floor(sec / 60);
    var hrs = Math.floor(min / 60);
    var days = Math.floor(hrs / 24);

    hrs = hrs % 24;
    min %= 60;
    sec %= 60;

    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    setInterval(countDown, 1000);
  }

  countDown();
}
