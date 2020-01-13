import React from 'react';
import ReactDOM from 'react-dom';

class LoginPage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row" id="loginPage">
                <div className="container" id="loginPageCont">
                    <div className="row justify-content-center">
                        <img className="mt-lg-4" src="/img/navbar/masterLogo.png" />
                        <div className="w-100"></div>

                        <form className="col-5 justify-content-center">
                            <div className="row mt-lg-5 mt-1">
                                <input type="email" placeholder="Email or Username" className="col-12 my-3"
                                    id="usernameInput"></input>
                                <input type="password" placeholder="Password" className="col-12 my-3"
                                    id="passwordInput"></input>

                                <button type="submit" className="w-100 mt-3" id="loginButton">Log In</button>
                            </div>
                        </form>

                        <div className="w-100"></div>

                        <form className="col-5 justify-content-center mt-4">
                            <div className="row justify-content-center">OR LOG IN WITH </div>
                            <div className="row mt-3">
                                <div className="col-5 mx-auto fa fa-facebook-official text-center">{` `}Facebook</div>
                                <div className="col-5 myr mx-auto text-center"><img src="/img/google-icon.png" id="google-icon" />Google</div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        );
    }
}

export default LoginPage;

if (document.getElementById('LoginPage')) {
    ReactDOM.render(<LoginPage />, document.getElementById('LoginPage'));
}