/**
 * Created by Juan on 17/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';
import EditModalConcurso from "./EditModalConcurso.jsx";


export default class InfoConcurso extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: null,
        };
        this.warningAlert = (
            <SweetAlert warning
                        confirmBtnText="OK!"
                        confirmBtnBsStyle="danger"
                        cancelBtnBsStyle="default"
                        title="You already apply for this job"
                        onConfirm={() => this.setState({alert: null})}>

            </SweetAlert>
        );
        this.succesAlert = (
            <SweetAlert success
                        title="You apply succesfully"
                        onConfirm={() => this.setState({alert: null})}>

            </SweetAlert>
        );
    }

    deleteJob() {
        const texto = "The job have been deleted";
        const hideAlert = () => {
            this.setState({
                alert: null
            });
        };
        const succesA = () => {
            console.log("delete");
            this.setState({
                alert: getSuccessAlert
            });

        };
        const deleteThisJob = () => {
            this.setState({
                alert: null
            });

        };

        const getWAlert = (

            <SweetAlert
                warning
                showCancel
                confirmBtnText="Yes!"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Are you sure?"
                onConfirm={succesA}
                onCancel={hideAlert}
            >
                You would not recover this information!
            </SweetAlert>
        );
        const getSuccessAlert = (
            <SweetAlert
                success
                title={texto}
                onConfirm={deleteThisJob}>
            </SweetAlert>

        );
        this.setState({
            alert: getWAlert
        });


    }

    getPath() {
        return 'concursos/'+ this.props.concurso.url;
    }


    render() {
        return (
        <a href= {this.props.concurso.url}>
            <button>
                <div>
                    <div className="job row">
                        <div className="panel panel-info">

                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-md-10">
                                        <h3 className="panel-title">{this.props.concurso.nombre}</h3 >
                                    </div>
                                    <div className="col-md-2">
                                        <button className="deleteAnimal">
                                            &times;
                                        </button>
                                    </div>
                                </div>


                            </div>

                            <div className="col-md-3">


                                <img alt="User Pic"
                                     src="Rostro.PNG"
                                     className="img-circle img-responsive"/>
                            </div>

                            <div className="col-md-9">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>Fecha inicio:</td>
                                        <td>{this.props.concurso.fechaInicio}</td>
                                    </tr>
                                    <tr>
                                        <td>Fecha fin:</td>
                                        <td>{this.props.concurso.fechaFin}</td>
                                    </tr>
                                    <tr>
                                        <td>Descripcion:</td>
                                        <td>{this.props.concurso.descripcion}</td>
                                    </tr>
                                    <tr>
                                        <td>Edit:</td>
                                        <EditModalConcurso/>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        </a>
        )
    }

}

