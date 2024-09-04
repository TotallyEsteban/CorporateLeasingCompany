const LiveChat = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([]);
    const [inputMessage, setInputMessage] = React.useState('');
  
    const toggleChat = () => setIsOpen(!isOpen);
  
    const sendMessage = () => {
      if (inputMessage.trim()) {
        setMessages([...messages, { text: inputMessage, sender: 'user' }]);
        setInputMessage('');
        // Simulate a response
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            text: "Thank you for your message. A customer service representative will be with you shortly.", 
            sender: 'rep' 
          }]);
        }, 1000);
      }
    };
  
    return (
      <div style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
        {!isOpen && (
          <button onClick={toggleChat} style={{
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            backgroundColor: '#f9a826', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <i className="fas fa-comment" style={{fontSize: '24px'}}></i>
          </button>
        )}
        {isOpen && (
          <div style={{
            width: '300px', 
            border: '1px solid #ccc', 
            borderRadius: '10px', 
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            <div style={{
              backgroundColor: '#f9a826', 
              color: 'white', 
              padding: '10px', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{fontWeight: 'bold'}}>FL SunShine Leasing Chat</span>
              <button onClick={toggleChat} style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px'}}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div style={{height: '300px', overflowY: 'auto', padding: '10px', backgroundColor: 'white'}}>
              {messages.map((msg, index) => (
                <div key={index} style={{marginBottom: '10px', textAlign: msg.sender === 'user' ? 'right' : 'left'}}>
                  <span style={{
                    display: 'inline-block', 
                    padding: '8px 12px', 
                    borderRadius: '18px', 
                    backgroundColor: msg.sender === 'user' ? '#3498db' : '#f1f1f1', 
                    color: msg.sender === 'user' ? 'white' : 'black',
                    maxWidth: '80%',
                    wordWrap: 'break-word'
                  }}>
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div style={{display: 'flex', padding: '10px', backgroundColor: 'white', borderTop: '1px solid #eee'}}>
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                style={{
                  flexGrow: 1, 
                  marginRight: '10px', 
                  padding: '8px', 
                  border: '1px solid #ccc', 
                  borderRadius: '20px'
                }}
                placeholder="Type your message..."
              />
              <button onClick={sendMessage} style={{
                padding: '8px 15px', 
                backgroundColor: '#3498db', 
                color: 'white', 
                border: 'none', 
                borderRadius: '20px', 
                cursor: 'pointer'
              }}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  ReactDOM.render(<LiveChat />, document.getElementById('live-chat-container'));
