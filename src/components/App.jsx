import React, {Component} from 'react';
import Header from './Header.jsx'
import Main from './Main.jsx'
// import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAjajgN45i-QBA5L3oZoOe6caMv9wKGB2E",
    authDomain: "smarttools-jscardona12.firebaseapp.com",
    databaseURL: "https://smarttools-jscardona12.firebaseio.com",
    projectId: "smarttools-jscardona12",
    storageBucket: "smarttools-jscardona12.appspot.com",
    messagingSenderId: "948114200644"
};
firebase.initializeApp(config);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: firebase.auth().currentUser,
        };
    }

    openProfileModal() {
        return;
    }

    componentDidMount(){
        var setState= (user)=>
        {
            this.setState({
                user: user,
            });
            console.log(this.state)
        }

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user);
                setState(user);
            } else {

                console.log("chao");
            }
        });
    }


    render() {
        return (
            <div >
                <Header user={this.state.user}/>
                <Main/>
            </ div >
        )
    };
}
export default App;
