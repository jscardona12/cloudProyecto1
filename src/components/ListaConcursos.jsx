/**
 * Created by Juan on 18/08/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import ModalAdd from './ModalAdd.jsx'
import InfoConcurso from './InfoConcurso.jsx';
import * as firebase from 'firebase';
import axios from 'axios';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-20%',
        transform: 'translate(-50%, -50%)',
        // background: 'rgb(0, 0, 0)',
        background: 'rgba(0, 0, 0, 0.7)',
        padding: '30px',
        color: '#e5e5e5',
        width: '30%'
    }
};
var concursos =[];
export default class ListaConcursos extends Component {

    constructor(props) {
        super(props);

        this.state ={
            user:'',
            concursos:[],

        };
        console.log(this.props.user)
        this.concs ={};

        this.onSelect = this.onSelect.bind(this);
    }

    addConcurso(concurso){
        console.log(concurso);
        var con = this.state.concursos;
        con.push(concurso)
        this.setState({
            concursos:con
        })
    }

    onSelect(val) {
        this.setState({country: val});
    }

    onSliderChange(value) {
        this.setState({filterPay: value});
    }

    insertJob() {
        // console.log("Insert A Job");
        // Meteor.call('jobs.insert', this.state.name, this.state.description, this.state.city, this.state.country,
        //     this.state.pay, this.state.currency);
        // console.log(Jobs.find({owner: Meteor.userId()}).fetch())
        // console.log("Insert Job");
        // this.closeModal();
    }

    getConcursos() {
        axios.get("http://localhost:8000/project1/concurso", {headers: {token: this.props.user}})
            .then(response => {
                this.setState({
                    concursos: response.data
                })
                console.log(this.state.concursos);
                console.log('SUCCESS');
                console.log(response);
            }).catch(function () {
            console.log("err");
        })
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    componentDidMount (){
        var user = this.props.user;
        console.log(user);
        this.getConcursos();

    }

    render() {

            return (
                <div className="container job-container">
                    <div className="col-md-3">
                        <div id="job-filter">
                            <ModalAdd user={this.props.user}/>
                        </div>

                    </div>
                    <div className="col-md-9" id="job-list">
                        {console.log(this.state.concursos)}
                        {this.state.concursos.map((concurso, index) => {
                            return <InfoConcurso key={index} concurso={concurso.fields}/>
                        })}
                    </div>
                </div>

            )
        }
}

ListaConcursos.propTypes = {
    user: PropTypes.string.isRequired,
    currentUser: PropTypes.object,
    onSelect: React.PropTypes.func
};

