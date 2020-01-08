import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';

class App extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid">
                <Homepage />
            </div>
        );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}