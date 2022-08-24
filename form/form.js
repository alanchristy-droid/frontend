validateForm = () => {
    let uname = document.forms.regForm.uname.value
    let pswd = document.forms.regForm.pswd.value
    if(uname == "" & pswd == "")
    {
        window.alert("Username and Password fields are required")
        return false
    }
    else if(uname == "")
    {
        window.alert("Username field is required")
        return false
    }
    else if(pswd == "")
    {
        window.alert("Password field is required")
        return false
    }   

    pswdLength = pswd.length
    pswdDigit = (/\d/).test(pswd)
    if(pswdLength < 8)
    {
        window.alert("Password must be minimum 8 characters")
        return false
    }
    else if(pswdDigit == "")
    {
        window.alert("Password must contain atleast one number")
        return false
    }
}

