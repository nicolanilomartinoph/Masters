import React from 'react';
import ReactDOM from 'react-dom';
import Support from './Support';
import MyAccount from './MyAccount';

class UpperHeaderCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row myr" id="UpperHeaderCont">
                <Support />
                <MyAccount />
            </div>
        );
    }
}

export default UpperHeaderCont;

if (document.getElementById('UpperHeaderCont')) {
    ReactDOM.render(<UpperHeaderCont />, document.getElementById('UpperHeaderCont'));
}