import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import UserList from '../components/UserList';
import ChatWindow from '../components/ChatWindow';

function Chat() {
  const [users] = useState(['User1', 'User2', 'User3']);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('conversar');

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setMessages([]); // Clear messages or load messages for the selected user
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
  };

  const buttonStyle = {
    marginBottom: '20px',
    width: '100%',
  };

  return (
    <Container className="mt-5">
      <Container>
        <Row>
          <Col md="6" style={containerStyle}>
            <Button
              variant="primary"
              style={buttonStyle}
              onClick={() => setActiveTab('conversar')}
            >
              Usuários para conversar
            </Button>
          </Col>
          <Col md="6" style={containerStyle}>
            <Button
              variant="primary"
              style={buttonStyle}
              onClick={() => setActiveTab('conversados')}
            >
              Usuários já conversados
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md="4" style={containerStyle}>
            {activeTab === 'conversar' && (
              <>
                <h4 style={{ textAlign: 'center' }}>Usuários para conversar</h4>
                <UserList users={users} onSelectUser={handleSelectUser} />
              </>
            )}
            {activeTab === 'conversados' && (
              <>
                <h4 style={{ textAlign: 'center' }}>Usuários já conversados</h4>
                <UserList users={users} onSelectUser={handleSelectUser} />
              </>
            )}
          </Col>
          <Col md="8" style={containerStyle}>
            <h4 style={{ textAlign: 'center' }}>Chat</h4>
            {selectedUser ? (
              <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
            ) : (
              <p style={{ textAlign: 'center' }}>Please select a user to start chatting</p>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Chat;
