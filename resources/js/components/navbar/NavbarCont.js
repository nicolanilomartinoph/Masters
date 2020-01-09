import React from 'react';
import ReactDOM from 'react-dom';

class NavbarCont extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row myr" id="NavBarCont">

            </div>
        );
    }
}

export default NavbarCont;

if (document.getElementById('NavbarCont')) {
    ReactDOM.render(<NavbarCont />, document.getElementById('NavbarCont'));
}