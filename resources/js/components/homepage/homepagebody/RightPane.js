import React from 'react';
import ReactDOM from 'react-dom';

class RightPane extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <img className="img-fluid mx-0 mt-xl-0 mt-5" src="./img/hpbodyphoto.png" id="hpbodyphoto" />
        );
    }
}

export default RightPane;

if (document.getElementById('RightPane')) {
    ReactDOM.render(<RightPane />, document.getElementById('RightPane'));
}