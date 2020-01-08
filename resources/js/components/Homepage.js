import React from 'react';
import ReactDOM from 'react-dom';
import UpperHeaderCont from './upperHeader/UpperHeaderCont'

class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="row">
                <UpperHeaderCont />
            </div>
        );
    }
}

export default Homepage;

if (document.getElementById('Homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('Homepage'));
}