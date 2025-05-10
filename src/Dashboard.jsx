

import logo  from "./image/logo.jpg"
import { useState, useEffect } from "react";
import { motion} from "framer-motion";
import "./Dashboard.css";
import { HiArrowCircleRight } from "react-icons/hi";
import Chat from "./chat";

function Dashboard(){
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  // const [isChatOpen, setIsChatOpen] = useState(false);

  // const toggleChat = () => {
  //   setIsChatOpen(!isChatOpen);
  // };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (e) => {
    e.preventDefault();
    setMessage(isValidEmail(email) ? "✅ Valid email!" : "❌ Invalid email. Please try again.");
  };

  return (
    <>
      <header className="header">
        <div className="header-title">
        
        <img src={logo} alt="SoftSell Logo" className="logo" />
        <h1>SoftSell</h1>
</div>
        <div className="toggle-text">
          <div className="toggle-switch" onClick={() => setDarkMode(!darkMode)}>
            <div className={`switch ${darkMode ? "switch-on" : ""}`}></div>
          </div>
          <span className="mode-label">{darkMode ? "Dark Mode" : "Day Mode"}</span>
        </div>
      </header>

      <section className="hero-section">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Unlock the Value of Unused Software Licenses
        </motion.h2>
        <p>Sell your software licenses easily and get paid fast.</p>
        <button>Sell My Licenses</button>
      </section>

      <section className="dual-box-section light-bg">
        <h3 className="section-heading">How It Works</h3>
        <div className="dual-box">
          {[
            { icon: "📤", title: "Upload License", desc: "Submit your unused software license easily." },
            { icon: "💰", title: "Get Valuation", desc: "We assess your license and offer a price." },
            { icon: "🏦", title: "Get Paid", desc: "Accept the offer and receive your payment." },
          ].map((item, idx) => (
            <div className="info-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dual-box-section dark-bg">
        <h3 className="section-heading">Why Choose Us</h3>
        <div className="dual-box">
          {[
            { icon: "⚡", title: "Fast Process", desc: "Quick evaluations and payments." },
            { icon: "🔒", title: "Secure", desc: "Your data is encrypted and safe." },
            { icon: "💼", title: "Business Friendly", desc: "We work with companies of all sizes." },
            { icon: "🌍", title: "Global Reach", desc: "We operate in multiple countries." },
          ].map((item, idx) => (
            <div className="info-card" key={idx}>
              <div className="icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-alt">
        <h3><center>Customer Review</center></h3>
        <div className="grid-container">
          <div className="card">
            <p>"SoftSell helped us recover value from unused licenses effortlessly."</p>
            <p><strong>— Nikunj Bisani, IT Manager, IPS Academy</strong></p>
          </div>
          <div className="card">
            <p>"Great service and quick payments! Highly recommend."</p>
            <p><strong>— NandKishore, Operation Manager, SoftSolution</strong></p>
          </div>
          <div className="card see-more">
            <p>See More Review</p>
            <HiArrowCircleRight />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3><center>Contact Us</center></h3>
        <form className="form" onSubmit={validateEmail}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
          <input type="text" placeholder="Company" />
          <select required>
            <option value="">Select License Type</option>
            <option value="Office">Microsoft Office</option>
            <option value="Adobe">Adobe Creative Suite</option>
            <option value="Antivirus">Antivirus</option>
          </select>
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="message-feedback">{message}</div>
      </section>

      <footer>
        © 2025 SoftSell. All rights reserved.
      </footer>

      {/* <div className="Chat-Toggle">
        <div className="Chat-Icon">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25634.png" alt="Chat Icon"  width="50px" onClick={toggleChat} />
        
        </div>
         {isChatOpen && (
        <div className="chat-section">
          <h3>Need Help? Try asking:</h3>
        
        </div>
      )}
    </div> */}
       <Chat />
    </>
  );
}

export default Dashboard;
