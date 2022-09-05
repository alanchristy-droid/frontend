import React from "react";
import "./calendar.css";
import CreateCalendar from "./CreateCalendar";

export default function CalArray(props) {
  const startDate = new Date(props.yearProp, props.monthProp, 1);
  const endDate = new Date(props.yearProp, props.monthProp + 1, 0);

  let startDay = startDate.getDay();
  let endDay = endDate.getDay();
  let totalDays = endDate.getDate();
  let dateArray = [];
  let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let i = 0; i < startDay; i++) {
    dateArray.push("");
  }
  for (let i = 1; i <= totalDays; i++) {
    dateArray.push(i);
  }
  for (let i = 6; i > endDay; i--) {
    dateArray.push("");
  }

  return (
    <div>
      <div id="divweek">
        <ul id="week">
          <CreateCalendar
            weekDay={dayArray}
            id="week"
            year={props.yearProp}
            month={props.monthProp}
          />
        </ul>
      </div>
      <div id="divdate">
        <ul id="date">
          <CreateCalendar
            dates={dateArray}
            id="date"
            year={props.yearProp}
            month={props.monthProp}
          />
        </ul>
      </div>
    </div>
  );
}
