import React from 'react';
import ReactDOM from 'react-dom';

class Support extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                Support
            </div>
        );
    }
}

export default Support;

if (document.getElementById('Support')) {
    ReactDOM.render(<Support />, document.getElementById('Support'));
}