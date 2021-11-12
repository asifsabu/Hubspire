import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';

export default class PincodeComponent extends Component {

    constructor() {
        super()
        this.state = {
            pinlist: []
        }
    }

    componentDidMount() {
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=302&date=14-09-2021')
        .then(responce=> {
            // console.log(responce.data.centers)
            this.setState({pinlist:responce.data.centers})
        })
    }


    render() {
        return (
            <div className="drop-down">
                <h1>Pincode</h1>
                
                <Form.Select>
                    {
                        this.state.pinlist.map(function(plist,k) {
                            return(
                            <option key={k} value={plist.pincode}>{plist.pincode}</option>
                            )
                        })
                    }
                </Form.Select>
            </div>
        )
    }
}