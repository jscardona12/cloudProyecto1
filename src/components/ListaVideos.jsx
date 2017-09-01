/**
 * Created by Juan on 18/08/2017.
 */
import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import ModalAdd from './ModalAdd.jsx'
import InfoConcurso from './InfoConcurso.jsx';
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

export default class ListaVideos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            concursos: [{
                descripcion: "Mejor video sobre futbol ganara guayos",
                fechaInicio: "08/08/2017",
                fechaFin: "10/08/2017",
                imagen: "Rostro.PNG",
                nombre: "Adidas",
                url: "concursoAdidas"
            }]

        };

        this.onSelect = this.onSelect.bind(this);
    }

    addConcurso(concurso) {
        console.log(concurso);
        var con = this.state.concursos;
        con.push(concurso)
        this.setState({
            concursos: con
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

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const concursos = [
            {
                descripcion: "Mejor video sobre futbol ganara guayos",
                fechaInicio: "08/08/2017",
                fechaFin: "10/08/2017",
                imagen: "./Rostro.PNG",
                nombre: "Adidas",
                url: "concursoAdidas"
            }
        ];


        return (
            <div className="container">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="row"><h1></h1></div>
                    <div className="row"><h1></h1></div>
                    <h1> CONCURSO ADIDAS</h1>

                    <video width="400" controls>
                        <source src="http://localhost:3000/cat.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                    </video>
                </div>
            </div>

        )
    }

}


