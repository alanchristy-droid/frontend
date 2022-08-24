const calculateDay = (year, month) => {
    var startDate = new Date(year, month, 01)
    var endDate = new Date(year, month + 1 , 0)

    startDay = startDate.getDay()
    endDay = endDate.getDay()
    const days = [startDay, endDay]
    return days
}

const generateYear = (yearConst) =>{
    const year = document.getElementById("yearid")
    for(let i = 1970; i <= 2030; i++)
    {
        const yearElement = document.createElement("option")
        const content = document.createTextNode(i)
        yearElement.value = i
        if(i === yearConst)
        {
            yearElement.setAttribute("selected", "selected")
        }
        yearElement.appendChild(content)
        year.appendChild(yearElement)
    }
}
const generateMonth = (monthConst) =>{
    const month = document.getElementById("monthid")
    monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (let i = 0; i < monthArray.length; i++) 
    {
        const monthElement = document.createElement("option")
        const content = document.createTextNode(monthArray[i])
        monthElement.value = i
        monthElement.id = "month"
        if(i === monthConst)
        {
            monthElement.setAttribute("selected", "selected")
        }
        monthElement.appendChild(content)    
        month.appendChild(monthElement)

    }
}

const setCalender = (year, month) =>{
    days = calculateDay(year, month)
    const dD = new Date(year, month)
    const textMonth= dD.toLocaleString('default', { month: 'long' })
    contentYearMonth = `${textMonth} ${year}`
    document.getElementById("heading").innerHTML = contentYearMonth
    let dateArray = []
    let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const week = document.getElementById("divweek")
    const weekElement = document.createElement("UL")
    weekElement.id = "week"
    for( let i = 0; i < 7; i++)
    {
        
        const dayElement = document.createElement("LI")
        const content = document.createTextNode(dayArray[i])
        dayElement.appendChild(content)
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
        dateArray.push("")
    }

    const d = new Date(year, month + 1, 0)
    totalDays = d.getDate()
    for(i = 1; i <= totalDays; i++)
    {
        dateArray.push(i)
    }

    for(let i = 6; i > endDay; i--)
    {
        dateArray.push("")
    }
    let mainCalender = generateCalender(dateArray, year, month)
    document.getElementById("head").appendChild(mainCalender)
}  

const generateCalender = (dateArray, year, month) =>{
    const divDate = document.getElementById("divdate")
    const divDateElement = document.createElement('UL')
    divDateElement.id = "date"
    dateArray.forEach(v => {
        const element = document.createElement("LI")
        const content = document.createTextNode(v)
        element.appendChild(content)
        let day = new Date(year, month, v)
        let dayNum = day.getDay()
        if(dayNum === 0)
        {
            element.setAttribute("style", "color: red;")   
        }
        if(dayNum === 5)
        {
            element.setAttribute("style", "color: green")
        }
        divDateElement.appendChild(element)
    });
    return divDate.appendChild(divDateElement)
}

document.getElementById("monthid").addEventListener("change", (e)=>{
    e.preventDefault()
    dateIdVar = document.getElementById("date")
    weekIdVar = document.getElementById("week")
    weekIdVar.remove()
    dateIdVar.remove()
    let year = document.getElementById("yearid").value
    let month = document.getElementById("monthid").value
    setCalender(parseInt(year), parseInt(month))
})

document.getElementById("yearid").addEventListener("change", (e)=>{
    e.preventDefault()
    dateIdVar = document.getElementById("date")
    weekIdVar = document.getElementById("week")
    weekIdVar.remove()
    dateIdVar.remove()
    year = document.getElementById("yearid").value
    month = document.getElementById("monthid").value
    console.log(month, year)
    setCalender(parseInt(year), parseInt(month))
})


const d = new Date()
let year = d.getFullYear()
let month = d.getMonth()
generateMonth(month)
generateYear(year)
setCalender(year, month)

document.getElementById("incbutton").addEventListener("click", (e) =>{
    dateIdVar = document.getElementById("date")
    weekIdVar = document.getElementById("week")
    weekIdVar.remove()
    dateIdVar.remove()
    let yearChange = document.getElementById("yearid")
    let monthChange = document.getElementById("monthid")

    if(parseInt(month) === 11)
    {
        year += 1
        month = 0
        yearChange.value = year
        monthChange.value = month

    }
    else
    {
        month += 1
        monthChange.value = month
    }
    setCalender(parseInt(year), parseInt(month))
})

document.getElementById("decbutton").addEventListener("click", (e) =>{
    dateIdVar = document.getElementById("date")
    weekIdVar = document.getElementById("week")
    weekIdVar.remove()
    dateIdVar.remove()  
    let yearChange = document.getElementById("yearid")
    let monthChange = document.getElementById("monthid")

    if(parseInt(month) === 0)
    {
        year -= 1
        month = 11
        yearChange.value = year
        monthChange.value = month

    }
    else
    {
        month -= 1
        monthChange.value = month
    }
    setCalender(parseInt(year), parseInt(month))
})
