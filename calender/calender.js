const calculateDay = (year, month) => {
    var startDate = new Date(year, month, 01)
    var endDate = new Date(year, month + 1 , 0)

    startDay = startDate.getDay()
    endDay = endDate.getDay()
    const days = [startDay, endDay]
    return days
}

const generateYear = () =>{
    const year = document.getElementById("yearid")
    for(let i = 1970; i <= 2022; i++)
    {
        const yearElement = document.createElement("option")
        const content = document.createTextNode(i)
        yearElement.appendChild(content)
        year.appendChild(yearElement)
    }
}

const generateMonth = () =>{
    const month = document.getElementById("monthid")
    monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (let i = 0; i < monthArray.length; i++) 
    {
        const monthElement = document.createElement("option")
        const content = document.createTextNode(monthArray[i])
        monthElement.value=i
        // console.table({[monthArray[i]]:i})   
        monthElement.appendChild(content)    
        month.appendChild(monthElement)

    }
}

const setCalender = (year, month) =>{
    console.log("creating calendar with ",year, month)
    days = calculateDay(year, month)
    startDay = days[0]
    endDay = days[1]
    let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let startDateArray = []
    let endDateArray = []
    const week = document.getElementById("divweek")
    const weekElement = document.createElement("UL")
    weekElement.id = "week"
    for( let i = 0; i < 7; i++)
    {
        
        const dayElement = document.createElement("LI")
        const content = document.createTextNode(dayArray[i])
        dayElement.appendChild(content)
        // weekElement.appendChild(dayElement)
        if(i === 0)
        {
            dayElement.setAttribute("style", "color: red;")   
        }
        else if(i === 5)
        {
            dayElement.setAttribute("style", "color: green")
        }
        
        weekElement.appendChild(dayElement)
       
    }
    week.appendChild(weekElement)

    for(let i = 0; i < startDay; i++)
    {
        startDateArray.push("")
    }

    for(let i = 6; i > endDay; i--)
    {
        endDateArray.push("")
    }

    startDateArray.forEach(createSpace)
    createCalender(year, month)
    endDateArray.forEach(createSpace)
}    

const createSpace = (v) =>{
    const dateList = document.getElementById("date")
    console.log(dateList)
    if(!dateList)
    {
        const dateDiv = document.getElementById("divdate")
        const dateDivElement = document.createElement("UL")
        dateDivElement.id = "date"
        const dateElement = document.createElement("LI")
        dateElement.textContent=v
        dateDivElement.appendChild(dateElement)
        dateDiv.appendChild(dateDivElement)
    }
    else if(dateList)
    {

        const dateElement = document.createElement("LI")
        dateElement.textContent=v
        dateList.appendChild(dateElement)
    }
}

const createCalender = (year, month) =>{
    const d = new Date(year, month + 1, 0)
    totalDays = d.getDate()
    
    for(i = 1; i <= totalDays; i++)
    {
        const dateElement = document.getElementById("date")
        const element = document.createElement("LI")
        const content = document.createTextNode(i)
        element.appendChild(content)
        let day = new Date(year, month, i)
        let dayNum = day.getDay()
        if(dayNum === 0)
        {
            element.setAttribute("style", "color: red;")   
        }
        if(dayNum === 5)
        {
            element.setAttribute("style", "color: green")
        }
        dateElement.appendChild(element)
    }
    // dateDiv.appendChild(dateDivElement)
}
document.getElementById("monthid").addEventListener("change", (e)=>{
    e.preventDefault()
    dateIdVar = document.getElementById("date")
    weekIdVar = document.getElementById("week")
    weekIdVar.remove()
    dateIdVar.remove()
    let yearChange = document.getElementById("yearid").value
    let monthChange = document.getElementById("monthid").value
    setCalender(parseInt(yearChange), parseInt(monthChange))
})
generateMonth()
generateYear()
const d = new Date()
let year = d.getFullYear()
let month = d.getMonth()
setCalender(year, month)