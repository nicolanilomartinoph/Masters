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
            <div className="container">
                <div className="row">
                    <img src="/img/masterLogo.png" />
                </div>
            </div>
        );
    }
}

export default LoginPage;

if (document.getElementById('LoginPage')) {
    ReactDOM.render(<LoginPage />, document.getElementById('LoginPage'));
}