import React, { useState } from 'react';
import './chat.css'; // Assuming you have a CSS file for styling

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const mockResponses = {
    'how do i sell my license?': 'To sell your license, click on "Sell My Licenses" and upload your license details.',
    'is my software eligible?': 'We support most major software licenses. Please upload to check eligibility.',
    'how long does it take to get paid?': 'Payments are typically processed within 24-48 hours.',
    'do you accept all software brands?': 'We accept most popular brands, including Microsoft, Adobe, and Autodesk.',
    'what is the process to transfer a license?': 'After evaluation, we’ll guide you through a simple license transfer process.'
  };

  const handleSend = () => {
    if (!message.trim()) return;

    const lowerMsg = message.toLowerCase();
    const response = mockResponses[lowerMsg] || 'Sorry, I did not understand your question.';

    setChatHistory(prev => [...prev, { question: message, answer: response }]);
    setMessage('');
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="Chat-container">
      <button onClick={toggleChat} className="chat-toggle-btn">
        {isChatOpen ? 'Close Chat' : 'Chat with Us'}
      </button>

      {isChatOpen && (
        <div className="chat-section">
          <h3 className="chat-heading">Need Help? Try asking:</h3>

          <ul className="chat-suggestions">
            <li onClick={() => setMessage('how do i sell my license?')}>How do I sell my license?</li>
            <li onClick={() => setMessage('is my software eligible?')}>Is my software eligible?</li>
            <li onClick={() => setMessage('how long does it take to get paid?')}>How long does it take to get paid?</li>
            <li onClick={() => setMessage('do you accept all software brands?')}>Do you accept all software brands?</li>
            <li onClick={() => setMessage('what is the process to transfer a license?')}>What is the process to transfer a license?</li>
          </ul>
          
          <div className="chat-box">
            {chatHistory.map((item, index) => (
              <div key={index} className="chat-pair">
                <p className="chat-question"><strong>You:</strong> {item.question}</p>
                <p className="chat-answer"><strong>Bot:</strong> {item.answer}</p>
              </div>
            ))}
          </div>

          <div className="chat-input-row">
            <input
              type="text"
              value={message}
              placeholder="Type your question..."
              onChange={(e) => setMessage(e.target.value)}
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
