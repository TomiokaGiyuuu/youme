import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">YouMe</h3>
                    <span className="loginDesc">
                        We are together!
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="email" className="loginInput"/>
                        <input placeholder="password" className="loginInput"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <hr className="loginHr"/>
                        <div className="btnCenter">
                            <button className="loginRegisterBtn">Create a new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;