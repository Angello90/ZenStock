import "./css/login.css"
import { Link } from "react-router-dom";


function InputMain({type, callback}) {

    return (
        <div className="container_main_login">
            <div className="container_login">
            <div className="left_container_login">
                <h1>Welcome</h1>
            </div>
            <div className="right_container_login">
                <h1>{type}</h1>
                <div className="container_login_email c_input">
                    <label htmlFor="email" className="input-label">Email</label>
                    <input type="email" id="email" required autoComplete="off" />
                </div>
                <div className="container_login_password c_input">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button id="login_bp" onClick={callback}>{type}</button>
                <div className="container_change_mode">
                    {type === "Login" ? <><p>Don't have an account? <Link to="/register">Register</Link></p> <p>Forgot your password? <Link to="/reset">Reset it</Link></p> </> : <p>Already have an account? <Link to="/login">Login</Link></p>}                
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default InputMain