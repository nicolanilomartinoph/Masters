import React from 'react';
import ReactDOM from 'react-dom';
import UpperHeaderCont from './upperHeader/UpperHeaderCont';
import NavbarCont from './navbar/NavbarCont';

class Page1 extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="col-12 no-gutter mx-auto" id="Page1">
                <UpperHeaderCont />
                <NavbarCont />
            </div>
        );
    }
}

export default Page1;

if (document.getElementById('Page1')) {
    ReactDOM.render(<Page1 />, document.getElementById('Page1'));
}