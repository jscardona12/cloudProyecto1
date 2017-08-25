/**
 * Created by Juan on 17/05/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SweetAlert from 'react-bootstrap-sweetalert';


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


    // applyJob() {
    //     var profile = Meteor.user().profile;
    //     var profiles = this.props.job.profiles;
    //     var bool = false;
    //     profiles = profiles.filter(profilei => profilei.email === profile.email);
    //     profiles.forEach(profilei => {
    //         if (profile.email === profilei.email) {
    //             bool = true;
    //             this.setState({alert: this.warningAlert});
    //         }
    //     })
    //     if (bool === false) {
    //         Meteor.call('jobs.update', this.props.job._id, profile);
    //         this.setState({alert: this.succesAlert});
    //     }
    //
    //
    // }

    getPath() {
        // FlowRouter.go('/publishJobs/' + this.props.job._id + "/applicants");
    }


    render() {
        return (
            <div>
                <div className="job row">
                    <div className="col-md-3">
                        <img id="jobImage" src={this.props.concurso.imagen} alt="image"/>
                    </div>
                    <div className="col-md-6">
                        <h2>{this.props.concurso.nombre}</h2>
                        <div>

                            <h3 style={{display: 'inline'}}>Fecha Inicio: </h3>
                            <p style={{display: 'inline'}}>
                                {this.props.concurso.fechaInicio}
                            </p>

                        </div>
                        <div>

                            <h3 style={{display: 'inline'}}>Fecha Fin: </h3>
                            <p style={{display: 'inline'}}>
                                {this.props.concurso.fechaFin}
                            </p>

                        </div>
                        <div>
                            <h3 style={{display: 'inline'}}>Descripcion: </h3>
                            <p style={{display: 'inline'}}>
                                {this.props.concurso.descripcion}
                            </p>
                        </div>

                    </div>
                    <div> {this.state.alert}</div>
                    <div className="container col-md-3">
                        {this.props.delete ?
                            (
                                <div>
                                    <button onClick={this.getPath.bind(this)} className="btn btn-md btn-primary">
                                        Applicants
                                </button>
                                    <button className="btn btn-md btn-primary" onClick={() => this.deleteJob()}>
                                        Delete Job
                                    </button>
                                </div>) :
                            <button className="btn btn-md btn-primary" onClick={() => this.applyJob()}>
                                Apply
                            </button>
                        }
                    </div>

                </div>
            </div>

        )
    }

}

