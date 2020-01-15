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
            <div className="row no-gutter mt-5 mx-auto" id="NavBarCont">
                <div className="col-12 mx-2">
                    <div className="row">
                        <div className="col-12 ml-1">
                            <img className="" src="/img/navbar/masterLogo.png" id="masterLogo" />
                            <div className="d-flex flex-row justify-content-end" >
                                <div className="nvbut" id="emptySpace"></div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="gameCont">
                                    <span className="d-flex justify-content-center">GAME</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="newsCont">
                                    <span className="d-flex justify-content-center">NEWS</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="forumCont">
                                    <span className="d-flex justify-content-center">FORUM</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="storeCont">
                                    <span className="d-flex justify-content-center">STORE</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="concertCont">
                                    <span className="d-flex justify-content-center">CONCERT</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="sinewaveCont">
                                    <span className="d-flex justify-content-center">SINEWAVE</span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column " id="searchCont">
                                    <a><i className="fa fa-search" id="searchIcon"></i></a>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="loginCont">
                                    <span className="d-flex justify-content-center">
                                        <a href="/login">LOG IN</a>
                                    </span>
                                </div>
                                <div className="nvbut d-flex justify-content-center flex-column" id="registerCont">
                                    <span className="d-flex justify-content-center">
                                        <a href="/register">REGISTER</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default NavbarCont;

if (document.getElementById('NavbarCont')) {
    ReactDOM.render(<NavbarCont />, document.getElementById('NavbarCont'));
}

/*


                        */