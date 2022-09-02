import "./calendar.css"

export default function CreateCalendar(props){
    // console.log(props.dates)
    // let newDate = new Date(props.year, props.month, date)
    return(

        props.id ==="week" ?props.weekDay.map(day => 
            {return (<li style={day=== "Sun"?{color:"red"} :
            day==="Fri"? {color:"darkgreen"}:{color:"black"}}>{day}</li>)}) :
            props.dates.map((date, idx) =>
                {return(<li style={new Date(props.year, props.month, date).getDay() === 0 ? {color:"red"}:
                new Date(props.year, props.month, date).getDay() === 5 ? {color:"darkgreen"} : {color:"black"} }>{date}</li>)})
    )
}