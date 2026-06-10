import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'15px 40px',background:'#0a0a0a',position:'sticky',top:0,zIndex:100}}>
        <div style={{color:'white',fontSize:'22px',fontWeight:'bold'}}>🔬 iamscientist.ai</div>
        <div style={{display:'flex',gap:'30px'}}>
          <a href="#features" style={{color:'#ccc',textDecoration:'none'}}>Features</a>
          <a href="#about" style={{color:'#ccc',textDecoration:'none'}}>About</a>
          <a href="#contact" style={{color:'#ccc',textDecoration:'none'}}>Contact</a>
        </div>
        <button style={{background:'#6c63ff',color:'white',border:'none',padding:'10px 20px',borderRadius:'8px',cursor:'pointer'}}>Get Started</button>
      </nav>

      {/* HERO */}
      <section style={{background:'linear-gradient(135deg,#0a0a0a,#1a1a2e)',color:'white',textAlign:'center',padding:'100px 20px'}}>
        <h1 style={{fontSize:'52px',fontWeight:'bold',marginBottom:'20px'}}>AI-Powered Science Platform</h1>
        <p style={{fontSize:'20px',color:'#aaa',maxWidth:'600px',margin:'0 auto 40px'}}>Accelerating scientific discovery with artificial intelligence. Collaborate, analyze, and innovate faster than ever.</p>
        <button style={{background:'#6c63ff',color:'white',border:'none',padding:'15px 40px',borderRadius:'10px',fontSize:'18px',cursor:'pointer',marginRight:'15px'}}>Start For Free</button>
        <button style={{background:'transparent',color:'white',border:'2px solid #6c63ff',padding:'15px 40px',borderRadius:'10px',fontSize:'18px',cursor:'pointer'}}>Learn More</button>
      </section>

      {/* FEATURES */}
      <section id="features" style={{background:'#111',padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{color:'white',fontSize:'36px',marginBottom:'50px'}}>Why iamscientist.ai?</h2>
        <div style={{display:'flex',justifyContent:'center',gap:'30px',flexWrap:'wrap'}}>
          {[
            {icon:'🧠',title:'AI Research Assistant',desc:'Get intelligent suggestions and insights powered by advanced AI models.'},
            {icon:'📊',title:'Data Analysis',desc:'Analyze complex datasets with automated tools and visual dashboards.'},
            {icon:'🤝',title:'Collaborate',desc:'Work with scientists globally in real-time on shared projects.'},
            {icon:'🚀',title:'Fast Results',desc:'Speed up your research pipeline from months to days.'}
          ].map((f,i) => (
            <div key={i} style={{background:'#1e1e2e',borderRadius:'12px',padding:'30px',width:'220px',transition:'transform 0.3s'}}
              onMouseEnter={e=>e.currentTarget.style.transform='translateY(-8px)'}
              onMouseLeave={e=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{fontSize:'40px',marginBottom:'15px'}}>{f.icon}</div>
              <h3 style={{color:'white',marginBottom:'10px'}}>{f.title}</h3>
              <p style={{color:'#888',fontSize:'14px'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{background:'#0a0a0a',color:'white',padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'36px',marginBottom:'20px'}}>About Us</h2>
        <p style={{color:'#aaa',maxWidth:'700px',margin:'0 auto',fontSize:'18px',lineHeight:'1.8'}}>iamscientist.ai is a next-generation platform built for researchers, scientists, and innovators. We combine cutting-edge AI with collaborative tools to transform how science is done.</p>
      </section>

      {/* FOOTER */}
      <footer style={{background:'#050505',color:'#666',textAlign:'center',padding:'30px'}}>
        <p>© 2026 iamscientist.ai — All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;