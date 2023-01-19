import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

const Contact = () => {
    return (
        <div>
            <FormGroup>
                <Label for="first-name">First Name</Label>
                <Input id="first-name" placeholder="First Name" type="text"></Input>
                <Label for="last-name">Last Name</Label>
                <Input for="last-name" placeholder="Last Name" type="text"></Input>
                <Label for="comments">Comments</Label>
                <Input for="comments" type="textarea"></Input>
            </FormGroup>
        </div>
    )
}

export default Contact;
