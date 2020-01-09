import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row" id="homepage">
                <Page1 />
                <div className="w-100"></div>
                <Page2 />
                <div className="w-100"></div>
                <Page3 />
            </div>
        );
    }
}

export default Homepage;

if (document.getElementById('Homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('Homepage'));
}