import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button, Card, Form, FormGroup, Input } from 'reactstrap';
function Adduser(){
    return (
        <div>
            <ToastContainer />
            <Form>
                <FormGroup>
                    <label for="username">Username</label>
                    <Input type="text" placeholder="Username" name="username" id="username" />
                </FormGroup>
                <FormGroup>
                    <label for="email">Email</label>
                    <Input type="email" placeholder="Email Address" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                    <label for="password">Password</label>
                    <Input type="password" id="password" name="password" placeholder="Password" />
                </FormGroup>
                <Button color="primary">Add New</Button>
            </Form>
        </div>
    );
};
export default Adduser;