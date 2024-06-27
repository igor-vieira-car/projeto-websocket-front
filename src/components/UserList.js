import React from 'react';
import { ListGroup } from 'react-bootstrap';

function UserList({ users, onSelectUser }) {
  return (
    <ListGroup>
      {users.map((user, index) => (
        <ListGroup.Item key={index} onClick={() => onSelectUser(user)}>
          {user}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default UserList;
