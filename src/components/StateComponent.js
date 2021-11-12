import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';


export default class StateComponent extends Component {

    constructor() {
        super()
        this.state = {
            statelist: []
        }
    }

    componentDidMount() {
        axios.get('https://cdndemo-api.co-vin.in/api/v2/admin/location/states')
        .then(responce=> {
            // console.log(responce.data.states)
            this.setState({statelist:responce.data.states})
        })
    }

    render() {

        return (
            <div className="drop-down">
                <h1>State</h1>
                <Form.Select>
                    {
                        this.state.statelist.map(function(st, k) {
                            return(
                            <option key={k} value={st.state_name} >{st.state_name}</option>
                            )
                        })
                    }
                </Form.Select>
            </div>
        )
    }
}