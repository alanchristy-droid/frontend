const calculateDay = (year, month) => {
    var startDate = new Date(year, month, 01)
    var endDate = new Date(year, month + 1, 0)

    startDay = startDate.getDay()
    endDay = endDate.getDay()
    const days = [startDay, endDay]
    return days
}


const setCalender = () =>{
    days = calculateDay()
    startDay = days[0]
    endDay = days[1]
    let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let startDateArray = []
    let endDateArray = []
    for( let i = 0; i < 7; i++)
    {
        const week = document.getElementById("week")
        const dayElement = document.createElement("LI")
        const content = document.createTextNode(dayArray[i])
        dayElement.appendChild(content)
        week.appendChild(dayElement)
    }
    for(let i = 0; i < startDay; i++)
    {
        startDateArray.push("")
    }

    for(let i = 6; i > endDay; i--)
    {
        endDateArray.push("")
    }
    startDateArray.forEach(createSpace)
    createCalender()
    endDateArray.forEach(createSpace)
}    

const createSpace = (v) =>{
    const date = document.getElementById("date")
    const dateElement = document.createElement("LI")
    dateElement.textContent=v
    date.appendChild(dateElement)
}

const createCalender = () =>{
    const d = new Date(2022, 08, 0)
    totalDays = d.getDate()
    for(i = 1; i <= totalDays; i++)
    {
        const date = document.getElementById("date")
        const element = document.createElement("LI")
        const content = document.createTextNode(i)
        element.appendChild(content)
        date.appendChild(element)
    }
}
// setCalender()
generateYear()
generateMonth()
const d = new Date()
let year = d.getFullYear()
let month = d.getMonth()
setCalender(year, month)
