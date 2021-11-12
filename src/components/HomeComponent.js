import React, { Component } from 'react';
import { Tabs, Tab, Table } from 'react-bootstrap';
import StateComponent from '../components/StateComponent';
import DistrictComponent from '../components/DistrictComponent';
import PincodeComponent from '../components/PincodeComponent';
import AadharComponent from '../components/AadharComponent';
import BirthComponent from '../components/BirthComponent';
import PassportComponent from '../components/PassportComponent';
import StudentComponent from '../components/StudentComponent'


export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <section className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 d-flex align-items-center">
                                <div>
                                    <h1 className="banner-title">Welcome to Covid web</h1>
                                    <h6 className="banner-text">We’re all responsible.....Let’s defeat COVID 19</h6>
                                </div>
                            </div>
                            <div className="col-sm-6 text-center">
                                <img src={require('../images/banner.svg').default} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="registration-section">
                    <h1 className="registration-title">Registration</h1>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                    <div className="card">
                                    <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-sm-8">
                                        <ul className="d-flex justify-content-around">
                                            <li className="d-flex align-items-center">
                                                <i className="mdi mdi-check active"></i>
                                                <p className="m-0 ms-2">Identification</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className=""></i>
                                                <p className="m-0 ms-2">Vaccine Center</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className=""></i>
                                                <p className="m-0 ms-2">Appointment</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="identification-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 text-center">
                                <h1 className="section-subtitle">Select Identification type</h1>
                            </div>
                            <div className="col-sm-7">
                                <Tabs defaultActiveKey="Aadhar" id="uncontrolled-tab-example" className="mb-3 border-0">
                                    <Tab eventKey="Aadhar" title="Aadhar ID">
                                        <div className="form-outer">
                                            <p className="form-label">Enter your Aadhar Number</p>
                                            <AadharComponent />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="student" title="Student ID">
                                        <div className="form-outer">
                                            <p className="form-label">Enter your Student Id</p>
                                            <StudentComponent />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="passport" title="Passport">
                                        <div className="form-outer">
                                            <p className="form-label">Enter your Passport</p>
                                            <PassportComponent />
                                        </div>
                                    </Tab>

                                    <Tab eventKey="certificate" title="Birth Certificate">
                                        <div className="form-outer">
                                            <p className="form-label">Enter your Birth Certificate</p>
                                            <BirthComponent />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="registration-section">
                    <h1 className="registration-title">Registration</h1>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                    <div className="card">
                                    <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-sm-8">
                                        <ul className="d-flex justify-content-around">
                                            <li className="d-flex align-items-center">
                                                <i className="mdi mdi-check active"></i>
                                                <p className="m-0 ms-2">Identification</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className="mdi mdi-check active"></i>
                                                <p className="m-0 ms-2">Vaccine Center</p>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <i className=""></i>
                                                <p className="m-0 ms-2">Appointment</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="center-selection">
                    <div className="text-center">
                        <h1 className="section-subtitle">Select Identification type</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <StateComponent />
                            </div>

                            <div className="col-sm-4">
                                <DistrictComponent />
                            </div>
                            <div className="col-sm-4">
                                <PincodeComponent />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="detail-section">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card highlight">
                                    <div className="card-body">
                                        <p>18+</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <p>45+</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card highlight">
                                    <div className="card-body">
                                        <p>Free</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <p>Paid</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card highlight">
                                    <div className="card-body">
                                        <p>First Dose</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="table-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Covaxin</th>
                                            <th>Covishield</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="text-primary">
                                            <td>01.</td>
                                            <td>
                                                <div>Mariam Hospital</div>
                                                <small>Pala, Kottayam, Kerala</small>
                                            </td>
                                            <td>16</td>
                                            <td>34</td>
                                            <td>Selected</td>
                                        </tr>
                                        <tr>
                                            <td>02.</td>
                                            <td>
                                                <div>Bharat Hospital</div>
                                                <small>Kumarakom, Kottayam, Kerala</small>
                                            </td>
                                            <td className="text-success">29</td>
                                            <td className="text-danger">03</td>
                                            <td>Select</td>
                                        </tr>
                                        <tr>
                                            <td>03.</td>
                                            <td>
                                                <div>KIMS Bellerose Institute </div>
                                                <small>Athirampuzha, Kottayam, Kerala</small>
                                            </td>
                                            <td className="text-success">21</td>
                                            <td className="text-danger">07</td>
                                            <td>Select</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="col-sm-4 my-5">
                                <a className="btn btn-primary w-100" href="javascript:;">Next</a>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}