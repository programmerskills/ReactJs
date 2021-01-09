import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
function Sidebar(){
    return (
        <div>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" >Menu1</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/adduser">Add User</Link>
            </ListGroup>
        </div>
    );
};
export default Sidebar;