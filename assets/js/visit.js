function randomDate(start, end) {
  var date = new Date(+start + Math.random() * (end - start));
  return moment(date).format("YYYY-MM-DD");
}

var events = 500;
var data = [];
for (var i = 0; i < events; i++) {
  data.push({
    count: parseInt((Math.random() * 200).toFixed(0)),
    date: randomDate(
      moment()
        .subtract(1, "year")
        .subtract(5, "months")
        .format("x"),
      moment().format("x")
    )
  });
}

$("#visitorCalendarHeatMap").CalendarHeatmap(data, {
  title: "Please see the heat map below",
  lastMonth: moment().month(),
  coloring: "red",
  legend: {
    minLabel: "Empty"
  },
  labels: {
    custom: {
      monthLabels: "MMM"
    }
  }
});
