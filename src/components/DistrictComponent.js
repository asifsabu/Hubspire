import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

export default class DistrictComponent extends Component {

    constructor() {
        super()
        this.state= {
            districtlist: []
        }
    }
   
    componentDidMount() {
        axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/17')
        .then(responce=> {
            //  console.log(responce.data.districts)
             this.setState({districtlist:responce.data.districts})
        })
       
    }

    render() {
        return (
            <div className="drop-down">
                <h1>District</h1>
                <Form.Select>
                    {
                        this.state.districtlist.map(function(itms, k) {
                            return(
                               <option key={k} value={itms.district_name}>{itms.district_name}</option> 
                            )
                            
                        })
                    }
                </Form.Select>
            </div>
        )
    }
}