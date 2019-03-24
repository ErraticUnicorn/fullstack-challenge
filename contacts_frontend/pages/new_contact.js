import React, { Component } from 'react'
import Router from 'next/router'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, TextField, FormControl, Input, Typography } from '@material-ui/core';

import fetch from 'isomorphic-unfetch'


export default class NewContact extends Component {

    constructor() {
        super();
        this.state = {
          first_name: '',
          last_name: '',
          phone_number: '',
          email: '',
          error: ''
        };
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const { first_name, last_name, email, phone_number } = this.state;
        fetch(`http://localhost:5000/contacts/create`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                first_name,
                last_name,
                email,
                phone_number
            })
        }).then((response) => {
            if (!response.error) {
                Router.back()
            } else {
                this.setState({ error: JSON.stringify(response.error.message) });
            }
        }).catch(error => this.setState({ error: 'Something went wrong' }));
    }

    handleFirstNameChange = (evt) => {
        this.setState({
          first_name: evt.target.value,
        });
      }
    
    handleLastNameChange = (evt) => {
        this.setState({
            last_name: evt.target.value,
        });
    }

        
    handlePhoneChange = (evt) => {
        this.setState({
            phone_number: evt.target.value,
        });
    }

    handleEmailChange = (evt) => {
        this.setState({
            email: evt.target.value,
        });
    }
    
    
    render() {
        return ( 
            <main>
                <CssBaseline />
                {
                this.state.error
                    && (
                    <h3 data-test="error">
                    <button onClick={this.dismissError}>✖</button>
                    {this.state.error}
                    </h3>
                    )
                }
                <Typography component="h1" variant="h5">
                    New Contact
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <Input id="first_name" onChange={this.handleFirstNameChange} placeholder="First Name" name="first_name" autoComplete="first name" autoFocus />
                        <Input id="last_name" onChange={this.handleLastNameChange} placeholder="Last Name" name="last_name" autoComplete="last name" />
                        <Input id="phone_number" onChange={this.handlePhoneChange}placeholder="Phone Number" name="phone_number" autoComplete="phone number" />
                        <Input id="email" name="email" onChange={this.handleEmailChange} placeholder="Email" autoComplete="email" />
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </form>
            </main>
        )
    }
}