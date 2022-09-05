import React from "react";
import CalArray from "./CalArray";
import "./calendar.css";

const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

export default function GetInput() {
    const [day, setDay] = React.useState({ year, month });
  const yearArray = [];
  const monthArray = [];

  for (let i = 0; i < 12; i++) {
    const dD = new Date(2022, i);
    const textMonth = dD.toLocaleDateString("default", { month: "long" });
    monthArray.push(textMonth);
  }

  for (let i = 1970; i <= 2030; i++) {
    yearArray.push(i);
  }

  function handleChange(event) {
    console.log("changes");
    console.log(event.target.name);
    setDay((prevState) => {
      return {
        ...prevState,
        [event.target.name]: parseInt(event.target.value),
      };
    });
  }

  function handleClick(event, isNext) {
    isNext
      ? setDay((prevState) => {
          return {
            ...prevState,
            [event.target.name]:
              prevState.month === 11 ? 0 : prevState.month + 1,
            year: prevState.month === 11 ? prevState.year + 1 : prevState.year,
          };
        })
      : setDay((prevState) => {
          console.log(day.month, day.year);
          return {
            ...prevState,
            [event.target.name]:
              prevState.month === 0 ? 11 : prevState.month - 1,
            year: prevState.month === 0 ? prevState.year - 1 : prevState.year,
          };
        });
  }
  return (
    <div>
      <div id="head">
        <div id="dropdown">
          <select
            id="monthid"
            name="month"
            onChange={handleChange}
            value={day.month}
          >
            {monthArray.map((eachMonth, i) => (
              <option value={i} name="month">
                {eachMonth}
              </option>
            ))}
          </select>

          <select
            id="yearid"
            name="year"
            onChange={handleChange}
            value={day.year}
          >
            {yearArray.map((eachYear) => (
              <option value={eachYear} name="year">
                {eachYear}
              </option>
            ))}
          </select>
        </div>
        <CalArray yearProp={day.year} monthProp={day.month} />
      </div>
      <div id="buttondiv">
        <button name="month" onClick={(e) => handleClick(e, false)}>
          Previous
        </button>
        <button name="month" onClick={(e) => handleClick(e, true)}>
          Next
        </button>
      </div>
    </div>
  );
}
