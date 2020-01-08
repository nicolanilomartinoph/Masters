import React from 'react';
import ReactDOM from 'react-dom';

class MyAccount extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                MyAccount
            </div>
        );
    }
}

export default MyAccount;

if (document.getElementById('MyAccount')) {
    ReactDOM.render(<MyAccount />, document.getElementById('MyAccount'));
}