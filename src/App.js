import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="#home" className="logo">
              <img src="/assets/logos/Frame7.png" alt="TheiaXR Logo" className="logo-image" />
              TheiaXR
            </a>
            <ul className="nav-links">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#education">For Education</a></li>
              <li><a href="/demo.html" target="_blank">Demo</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                Revolutionize <span className="highlight">Clinical Training</span> with XR-Based OSCE Simulations
              </h1>
              <p>
                No more actors. Just hyper-realistic, AI-driven patient encounters. 
                Anytime, Anywhere. Transform medical education with immersive technology.
              </p>
              <a href="#demo" className="cta-button">Request a Demo</a>
            </div>
            <div className="hero-image">
              <img src="/assets/illustrations/medical-consultation.svg" alt="XR Medical Training Simulation" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to transform medical education</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(133, 95, 206, 0.1)'}}>
                <img src="/assets/icons/017-heart.svg" alt="AI-Powered" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>AI-Powered</h3>
              <p>Replace actors with responsive digital characters powered by AI and expressive animation that adapt to student interactions.</p>
              <a href="#demo" className="cta-button">Request a Demo</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(39, 174, 96, 0.1)'}}>
                <img src="/assets/icons/005-syringe.svg" alt="Simulate Symptoms" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>Simulate Symptoms</h3>
              <p>Experience realistic patient symptoms and conditions with advanced simulation technology that mirrors real-world scenarios.</p>
              <a href="#demo" className="cta-button">Request a Demo</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(47, 128, 237, 0.1)'}}>
                <img src="/assets/icons/024-clinic.svg" alt="Advanced Analytics" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>Advanced Analytics</h3>
              <p>Comprehensive performance tracking and detailed assessment reports to help students improve their clinical skills.</p>
              <a href="#demo" className="cta-button">Request a Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate experts behind TheiaXR's revolutionary medical training platform</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/2f50ea00e366d4d2d5432df9eaaa5caa57be9963.jpg" alt="Dr. Sarah Chen" />
              </div>
              <div className="team-info">
                <h3>Dr. Sarah Chen</h3>
                <p className="team-role">Chief Executive Officer</p>
                <p className="team-bio">
                  With over 15 years in medical education and XR technology, Dr. Chen leads our mission to 
                  transform clinical training through innovative AI-powered simulations.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/ed287a2c2cbd7a80619b91e2122fcdd4927c58a2.jpg" alt="Michael Rodriguez" />
              </div>
              <div className="team-info">
                <h3>Michael Rodriguez</h3>
                <p className="team-role">Chief Technology Officer</p>
                <p className="team-bio">
                  A pioneer in AI and virtual reality, Michael brings cutting-edge technology expertise 
                  to create the most realistic medical training experiences possible.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/ce69ac80acff80896a9665e4ce23d8c4b93dd8ec.jpg" alt="Dr. Emily Johnson" />
              </div>
              <div className="team-info">
                <h3>Dr. Emily Johnson</h3>
                <p className="team-role">Head of Medical Affairs</p>
                <p className="team-bio">
                  A practicing physician and medical educator, Dr. Johnson ensures our simulations 
                  meet the highest standards of clinical accuracy and educational effectiveness.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/e6d158f245af2ce8e415aea07dc7acdccfb49814.jpg" alt="David Kim" />
              </div>
              <div className="team-info">
                <h3>David Kim</h3>
                <p className="team-role">Lead UX Designer</p>
                <p className="team-bio">
                  David crafts intuitive and engaging user experiences that make complex medical 
                  training accessible and enjoyable for students and educators alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="section highlights">
        <div className="container">
          <div className="section-header">
            <h2>Product Highlights</h2>
            <p>Advanced features for comprehensive medical training</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>Responsive Avatars</h3>
              <p>Intelligent virtual patients that respond naturally to student interactions</p>
            </div>
            <div className="highlight-item">
              <h3>Realistic Conversations</h3>
              <p>Natural language processing for authentic clinical dialogue</p>
            </div>
            <div className="highlight-item">
              <h3>Analytics Dashboard</h3>
              <p>Comprehensive performance tracking and detailed assessment reports</p>
            </div>
            <div className="highlight-item">
              <h3>No Actors Needed</h3>
              <p>Eliminate scheduling conflicts and reduce training costs significantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Conversations Section */}
      <section className="section conversation">
        <div className="container">
          <div className="conversation-content">
            <div className="conversation-image">
              <img src="/assets/illustrations/medical-consultation.svg" alt="Realistic Conversations Demo" />
            </div>
            <div className="conversation-text">
              <h2>Realistic Conversations</h2>
              <p>
                Replace actors with responsive digital characters powered by AI and expressive animation. 
                Our advanced system creates natural, flowing conversations that feel authentic and engaging.
              </p>
              <a href="#demo" className="cta-button">See It in Action</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <h2>Partners & Friends</h2>
          <div className="partners-grid">
            <div className="partner-logo">Medical University</div>
            <div className="partner-logo">Healthcare Institute</div>
            <div className="partner-logo">Training Center</div>
            <div className="partner-logo">Research Foundation</div>
            <div className="partner-logo">Medical Academy</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Users Say</h2>
            <p>Real feedback from medical professionals and students</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "TheiaXR has completely transformed how we approach clinical training. The AI-powered simulations are incredibly realistic and provide consistent, high-quality learning experiences for all our students."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">DR</div>
                <div className="author-info">
                  <h4>Dr. Sarah Rodriguez</h4>
                  <p>Medical Education Director</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-text">
                "As a medical student, I love that I can practice patient interactions anytime without coordinating with actors. The feedback system helps me identify areas for improvement quickly."
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">MJ</div>
                <div className="author-info">
                  <h4>Michael Johnson</h4>
                  <p>4th Year Medical Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p>Ready to revolutionize your medical training? Let's talk!</p>
          </div>
          <div className="contact-content">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Institution/Organization" />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Select Interest</option>
                    <option value="demo">Request Demo</option>
                    <option value="partnership">Partnership</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                </div>
                <button type="submit" className="cta-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TheiaXR</h3>
              <p>Revolutionizing medical training through immersive XR technology and AI-powered simulations.</p>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <a href="mailto:hello@theiaxr.com">hello@theiaxr.com</a>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
              <p>San Francisco, CA</p>
            </div>
            
            <div className="footer-section">
              <h3>Follow Us</h3>
              <a href="https://linkedin.com/company/theiaxr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/theiaxr" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://youtube.com/theiaxr" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
            
            <div className="footer-section">
              <h3>Legal</h3>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 TheiaXR. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App; 