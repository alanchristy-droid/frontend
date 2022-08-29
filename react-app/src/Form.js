import "./form.css"
import React from "react"
// import Display from "./Display"
const initialState={
    username: "" ,
    password: "",
    cityofemployment: "",
    webserver: "",
    role: "",
    isMail: true,
    isPayroll:false,
    isSelfService:false
}
export default function Form(){

    const [formData, setFormData] = React.useState(initialState)
    const [isValidated, setIsValidated] = React.useState(false)
    const [submitState, setSubmitState] = React.useState([])
    function handleChange(event)
    {
        const {name, value, checked,type} = event.target

        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        
        let flag = 1
        if(!formData.username && !formData.password)
        {
            window.alert("Username and Password fields are required")
            flag = 0
            event.preventDefault()
        }
        else if(!formData.username)
        {
            window.alert("Username field is required")
            flag = 0
            event.preventDefault()
        }
        else if(!formData.password)
        {
            window.alert("Password field is required")
            flag = 0
            event.preventDefault()
        }   

        const passwdLength = formData.password.length
        const passwdDigit = (/\d/).test(formData.password)
        if(formData.password && passwdLength < 8)
        {
            window.alert("Password must be minimum 8 characters")
            flag = 0
            event.preventDefault()
        }
        if(passwdLength >= 8 & !passwdDigit)
        {
            window.alert("Password must contain atleast one number")
            flag = 0
            event.preventDefault()
        }
        if(flag === 1)
        {
            console.log(formData)
            setIsValidated(true)
            setSubmitState(prevSubmitState => [...prevSubmitState, {...formData}])
            setFormData(initialState)
            event.preventDefault()
        }
    }



    function handleReset(){
        setFormData(initialState)
        setIsValidated(false)
    }
    return(
        <div style={{display:"flex", gap:"5rem"}} >
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
            {/* Username Input */}
                <label className="username">Username:</label>
                <input 
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
            {/* Password Input */}
                <label className="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>

            <div>
            {/* City of Employment Input */}
                <label className="coe">City of Employment</label>
                <input 
                    type="text"
                    placeholder="City of Employment"
                    name="cityofemployment"
                    value={formData.cityofemployment}
                    onChange={handleChange}
                />
            </div>

            <div>
            {/* Web Server Input */}
                <label className="webserver">Web Server</label>
                <select className="webserver" name="webserver" value={formData.webserver} onChange={handleChange} >
                    <option value="">~ Select a Server ~</option>
                    <option value="Apache HTTP Server">Apache HTTP Server</option>
                    <option value="Microsoft Internet Information Services">Microsoft Internet Information Services</option>
                    <option value="Nginx">Nginx</option>
                    <option value="Lighttpd">Lighttpd</option>
                </select>
        </div>  

            {/* Role Input */}
            <div style={{display:"flex", alignItems:"center"}}>
                <label className="role">Please specify your Role</label>
                <div>
                    <div>
                    <input 
                        type="radio"
                        name="role"
                        id="admin"
                        value="admin"
                        checked={formData.role === "admin"}
                        onChange={handleChange}
                    />
                    <label className="role">Admin</label>
                    </div>
                    <div>
                    <input 
                        type="radio"
                        name="role"
                        value="engineer"
                        id="engineer"
                        checked={formData.role === "engineer"}
                        onChange={handleChange}
                    />
                    <label className="role">Engineer</label>
                    </div>
                    <div>
                    <input 
                        type="radio"
                        name="role"
                        id="manager"
                        value="manager"
                        checked={formData.role === "manager"}
                        onChange={handleChange}
                    />
                    <label className="role">Manager</label>
                    </div>
                    <div>
                    <input 
                        type="radio"
                        id="guest"
                        name="role"
                        value="guest"
                        checked={formData.role === "guest"}
                        onChange={handleChange}
                    />
                    <label className="role">Guest</label>
                    </div>
                </div>
            </div>

            <div id="signon">
            {/* Sign On Input */}
                <label className="signon">Single Sign-on to the following</label>
                <div>
                    <div>
                    <input 
                        id="isMail"
                        type="checkbox"
                        name="isMail"
                        checked={formData.isMail}
                        onChange={handleChange}
                    />
                    <label className="signon" htmlFor="isMail">Mail</label>
                    </div>
                    <div>
                    <input 
                        id="isPayroll"
                        type="checkbox"
                        name="isPayroll"
                        checked={formData.isPayroll}
                        onChange={handleChange}
                    />
                    <label className="signon" htmlFor="isPayroll">Payroll</label>
                    </div>
                    <div>
                    <input 
                        id="isSelfService"
                        type="checkbox"
                        name="isSelfService"
                        checked={formData.isSelfService}
                        onChange={handleChange}
                    />
                    <label className="signon" htmlFor="isSelfService">Self-Service</label>
                    </div>
                </div>
            </div>    

            <div>
            {/* Submit and Reset Button */}
                <button className="submit">Submit</button>
                <button className="reset" type="button" onClick={handleReset}>Reset</button>
                </div>
        </form>
        <div className="display-form-container">
       {
        isValidated && submitState.map((v) =>   <div className="display-form">
            <span>Username: &nbsp;&nbsp;&nbsp;{v.username}</span>
            <span>Password: &nbsp;&nbsp;&nbsp;{v.password}</span>
            <span>City of employment:&nbsp;&nbsp;&nbsp;{v.cityofemployment}</span>
            <span>Web Server:&nbsp;&nbsp;&nbsp;{v.webserver}</span>
            <span>Role:&nbsp;&nbsp;&nbsp;{v.role}</span>
            <span>Sign-On:&nbsp;&nbsp;&nbsp;{`${v.isMail?"Mail":""} ${v.isPayroll?"Payroll":""} ${v.isSelfService?"Self-Service":""}`}</span>
        </div>)
       }
       </div>
        </div>
    )
}
