import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addContact } from '../Actions/Actions'

class NewContact extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            firstName: '',
            lastName: '',
            age: 0,
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Input type="text" name="firstName" placeholder="First Name" onchange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="lastName" id="exampleEmail" placeholder="Last Name" onchange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="age" id="exampleEmail" placeholder="Age" onchange={this.handleChange} />
                    </FormGroup>
                </Form>
                <div>
                    <Button color='success' onClick={() => this.props.addContact(this.state)}>Submit</Button>{'   '}
                    <Button outline color='danger' onClick={() => this.props.history.goBack()}>Cancel</Button>
                </div>
            </div>
        );
    }
}

export default connect(null, { addContact })(NewContact);