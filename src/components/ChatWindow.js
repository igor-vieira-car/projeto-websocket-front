import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

function ChatWindow({ messages, onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  const chatWindowStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '400px', // Define a altura fixa para a área de chat
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
  };

  const messagesStyle = {
    flex: 1,
    overflowY: 'auto', // Habilita a rolagem vertical
    marginBottom: '10px',
  };

  const formStyle = {
    borderTop: '1px solid #ccc',
    paddingTop: '10px',
  };

  return (
    <div style={chatWindowStyle}>
      <div style={messagesStyle}>
        <ListGroup>
          {messages.map((msg, index) => (
            <ListGroup.Item key={index}>{msg}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <Form onSubmit={handleSubmit} style={formStyle}>
        <Form.Group controlId="formBasicMessage">
          <Form.Control
            type="text"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default ChatWindow;
