import React, {Component} from 'react';
import AccountsUIWrapperHome from './AccountsUIWrapperHome.jsx';

class Home extends Component {


    render() {

        return (
            <div className="text-center  ">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 text-center">
                        <h1 >Welcome to Smart </h1>
                        <h2> Smart Tools es una pagina web que le permite publicar consursos de video y participar en
                            los mismos </h2>
                        <h2> Para crear concursos registrate o haz login </h2>
                        <h2>Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum</h2>
                        <h2>Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum</h2>
                        <h2>Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum</h2>
                        <h2>Loren Ipsum Loren Ipsum oren Ipsum Loren Ipsum Loren Ipsum Loren Ipsum</h2>
                        { /*<AccountsUIWrapperHome/>*/}
                    </div>
                    <div className="bajar row col-md-3">
                        <div>
                            <form className="loginform">
                                <div>
                                    <label><b>Username</b></label>
                                    <input id="sinput" type="text" placeholder="Enter Username" name="uname" required/>

                                    <label><b>Password</b></label>
                                    <input id="sinput" type="password" placeholder="Enter Password" name="psw"
                                           required/>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-3">
                                            <AccountsUIWrapperHome/>
                                        </div>
                                        <div className="col-md-3">
                                            <button id="button" type="submit">Login</button>
                                        </div>

                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;
