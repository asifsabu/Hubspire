import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

export default class PincodeComponent extends Component {


    render() {
        const pincodes = require('../data/pincode.json');
        return (
            <div className="drop-down">
                <h1>Pincode</h1>
                
                <Form.Select>
                {
                        pincodes.centers.map(item => <option value={item.pincode}>{item.pincode}</option>)
                    }
                </Form.Select>
            </div>
        )
    }
}