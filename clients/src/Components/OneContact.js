import React from 'react';
import { Card, CardTitle, Button } from 'reactstrap';
import '../App.css';

const OneContact = props => {
    return (
        <div>
            <Card body>
                <CardTitle><strong>First Name:</strong> {props.info.FirstName}</CardTitle>
                <CardTitle><strong>Last Name:</strong> {props.info.LastName}</CardTitle>
                <CardTitle><strong>Age:</strong> {props.info.Age} Years</CardTitle>
                <div className='btns'>
                    <Button color='link'>Update</Button>
                    <Button outline color='danger'>X</Button>
                </div>
            </Card>
        </div>
        
    )
}

export default OneContact;