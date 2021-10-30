import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


export default class StateComponent extends Component {

    render() {

        const country = require('../data/state.json');

        return (
            <div className="drop-down">
                <h1>State</h1>
                <Form.Select>
                    {
                        country.states.map(item => <option value={item.state_name}>{item.state_name}</option>)
                    }
                </Form.Select>
            </div>
        )
    }
}