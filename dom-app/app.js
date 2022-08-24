addElement = (name, image) =>{

    appId = document.getElementById('apps')
    document.querySelector('body').setAttribute("style", "margin: 50px")
    const element = document.createElement('LI')
    const ico = document.createElement('IMG')
    ico.setAttribute("src", image)
    ico.setAttribute("width", "30px")
    ico.setAttribute("height", "30px")
    const content = document.createTextNode(name)
    element.setAttribute("style","font-size: 40px" )
    element.appendChild(ico)
    element.appendChild(content)
    appId.appendChild(element)
}

getContentImage = () =>{
    addElement('Netflix', "./Netflix_icon.svg.png")
    addElement('Amazaon Prime', "./amazon-prime.png")
    addElement('Hotstar', "./hotstar.jpg")
}
getContentImage()