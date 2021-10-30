import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

export default class DistrictComponent extends Component {
   

    render() {
        const district = require('../data/district.json');
        return (
            <div className="drop-down">
                <h1>District</h1>
                <Form.Select>
                {
                        district.districts.map(item => <option value={item.district_name}>{ item.district_name }</option>)
                    }
                </Form.Select>
            </div>
        )
    }
}