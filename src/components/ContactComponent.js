import React, { Component } from 'react';
import FormComponent from './FormComponent'
import Formic from './Formicvalidation'

export default class ContactComponent extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>Contact us </h1>
                <FormComponent />
                <Formic />
            </div>
        )
    }
}