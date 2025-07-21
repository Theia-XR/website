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
              <li><a href="#about">About</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#team">Team</a></li>
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
                Redefining <span className="highlight">Clinical Assessment</span> with Immersive Simulation
              </h1>
              <p>
                Train smarter. Assess better. TheiaXR brings the OSCE into the future with virtual patients.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="cta-button">Book a Demo</a>
                <a href="#contact" className="cta-button" style={{marginLeft: '1rem', background: 'transparent', color: '#3A8EF6', border: '2px solid #3A8EF6'}}>Contact Us</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/assets/illustrations/medical-consultation.svg" alt="XR Medical Training Simulation" />
            </div>
          </div>
        </div>
      </section>

      {/* About TheiaXR Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2>About TheiaXR</h2>
            <p>TheiaXR is a hybrid OSCE simulation platform offering both onscreen learning for students and virtual reality based training and assessments for institutions. Designed for real-time feedback and efficient summative assessment, TheiaXR adapts to the needs of modern medical education.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Four simple steps to transform medical education</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>1. Select Your Mode</h3>
              <p>Students choose the onscreen module or faculty assign VR sessions.</p>
            </div>
            <div className="highlight-item">
              <h3>2. Engage with Simulation</h3>
              <p>Interact with virtual patients through browser or enter VR for immersive experience.</p>
            </div>
            <div className="highlight-item">
              <h3>3. Receive Feedback</h3>
              <p>Onscreen modules give instant feedback; VR sessions provide structured faculty reports.</p>
            </div>
            <div className="highlight-item">
              <h3>4. Monitor & Improve</h3>
              <p>Faculty dashboards provide cohort-level insights and assessment support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p>Comprehensive solutions for students and institutions</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(133, 95, 206, 0.1)'}}>
                <img src="/assets/icons/017-heart.svg" alt="Student Practice" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>For Students: Onscreen Practice</h3>
              <p>Access OSCE scenarios from any device. Practice clinical reasoning, communication, and empathy with immediate AI-powered feedback to build confidence.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(39, 174, 96, 0.1)'}}>
                <img src="/assets/icons/005-syringe.svg" alt="VR Simulation" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>For Institutions: VR Simulation</h3>
              <p>Deliver immersive OSCE stations using standalone VR headsets. Customize scenarios, monitor performance, and reduce reliance on standardized patients.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(47, 128, 237, 0.1)'}}>
                <img src="/assets/icons/024-clinic.svg" alt="Analytics" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>Advanced Analytics</h3>
              <p>Track student progress and engagement. Generate data-driven reports for academic evaluation and integrate with existing learning platforms.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{background: 'rgba(241, 196, 15, 0.1)'}}>
                <img src="/assets/icons/012-medicine.svg" alt="Global Access" style={{width: '32px', height: '32px'}} />
              </div>
              <h3>Global Access</h3>
              <p>Accessible worldwide with affordable VR hardware like Meta Quest. Ideal for remote campuses and designed to scale across countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section highlights">
        <div className="container">
          <div className="section-header">
            <h2>Use Cases</h2>
            <p>Flexible solutions for different educational needs</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>Student Practice</h3>
              <p>Self-paced learning and repeatable scenario runs before exams</p>
            </div>
            <div className="highlight-item">
              <h3>Institutional Assessment</h3>
              <p>Immersive, standardized assessments without actors or large setups</p>
            </div>
            <div className="highlight-item">
              <h3>Medical Schools</h3>
              <p>Comprehensive OSCE preparation and evaluation platform</p>
            </div>
            <div className="highlight-item">
              <h3>Global Training</h3>
              <p>Accessible simulation for remote and low-resource settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Multidisciplinary experts reimagining the future of clinical education</p>
          </div>
          
          <div className="team-grid">
                        <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/shreenik.jpeg" alt="Shreenik Kundu" />
              </div>
              <div className="team-info">
                <h3>Shreenik Kundu, MD, PhD (c)</h3>
                <p className="team-role">Founder & CEO</p>
                <p className="team-bio">
                  PhD candidate at McGill University and former Harvard Medical School's Paul Farmer Global Surgery Fellow. Leads TheiaXR with a vision to democratize simulation-based education.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/mohsen.jpeg" alt="Mohsen Amoei" />
              </div>
              <div className="team-info">
                <h3>Mohsen Amoei, MSc, PhD (c)</h3>
                <p className="team-role">Founder & CTO</p>
                <p className="team-bio">
                  Technical leader driving the development of TheiaXR's innovative simulation platform with expertise in advanced technology systems.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/oliver.jpeg" alt="Oliver Cafferty" />
              </div>
              <div className="team-info">
                <h3>Oliver Cafferty, PhD (c)</h3>
                <p className="team-role">LLM Expert & Lead</p>
                <p className="team-bio">
                  Spearheads integration of large language models into TheiaXR's conversational systems, ensuring real-time, clinically accurate AI-driven feedback.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/dan.jpeg" alt="Dan Poenaru" />
              </div>
              <div className="team-info">
                <h3>Dan Poenaru, MD, PhD</h3>
                <p className="team-role">Clinical & Global Health Advisor</p>
                <p className="team-bio">
                  Internationally recognized pediatric surgeon and medical education expert. Advises on clinical fidelity and scalability in diverse settings.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/elena.jpeg" alt="Elena Guadagno" />
              </div>
              <div className="team-info">
                <h3>Elena Guadagno, PhD</h3>
                <p className="team-role">Learning Science Advisor</p>
                <p className="team-bio">
                  Research director at Montreal Children's Hospital. Ensures TheiaXR's user experience is evidence-based, engaging, and pedagogically sound.
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-photo">
                <img src="/assets/images/Mehrnaz Amouei-4.jpg" alt="Mehrnaz Amouei" />
              </div>
              <div className="team-info">
                <h3>Mehrnaz Amouei, MDes</h3>
                <p className="team-role">Head of Design & Lead UX</p>
                <p className="team-bio">
                  Product Designer and Lead UX at TheiaXR. With a background in industrial design and human-AI interaction, she creates intuitive, emotionally driven experiences that enhance clinical training in XR environments.
                </p>
              </div>
            </div>
          </div>
          
          {/* Student Collaborators */}
          <div style={{marginTop: '4rem'}}>
            <div className="section-header">
              <h3 style={{fontSize: '1.8rem', marginBottom: '2rem'}}>Student Collaborators</h3>
              <p>Exceptional students contributing to design, testing, and implementation</p>
            </div>
            <div className="team-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
              <div className="team-card">
                <div className="team-photo">
                  <img src="/assets/images/Jessica_Xu.jpg" alt="Jessica Xu" />
                </div>
                <div className="team-info">
                  <h4>🎓 Jessica Xu</h4>
                </div>
              </div>
              
              <div className="team-card">
                <div className="team-photo">
                  <img src="/assets/images/Gabby_Wang.jpg" alt="Gabby Wang" />
                </div>
                <div className="team-info">
                  <h4>🎓 Gabby Wang</h4>
                </div>
              </div>
              
                             <div className="team-card">
                 <div className="team-photo">
                   <img src="/assets/images/Doris_Wu.jpg" alt="Doris Wu" />
                 </div>
                 <div className="team-info">
                   <h4>🎓 Doris Wu</h4>
                 </div>
               </div>
              
              <div className="team-card">
                <div className="team-photo">
                  <img src="/assets/images/Jocelyn_Dong.jpg" alt="Jocelyn Dong" />
                </div>
                <div className="team-info">
                  <h4>🎓 Jocelyn Dong</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Can students use TheiaXR without VR equipment?</h3>
              <p>Yes. Students can access onscreen modules from any device for formative practice.</p>
            </div>
            
            <div className="feature-card">
              <h3>Can institutions conduct summative assessments?</h3>
              <p>Absolutely. Our platform supports summative testing through immersive, trackable simulations.</p>
            </div>
            
            <div className="feature-card">
              <h3>Is TheiaXR customizable?</h3>
              <p>Yes. We offer customizable scenarios, language options, and institutional branding.</p>
            </div>
            
            <div className="feature-card">
              <h3>What hardware is required for VR?</h3>
              <p>Any standalone VR headset like Meta Quest 2 or 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-header">
            <h2>Contact Us</h2>
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
              <p>Redefining Clinical Assessment with Immersive Simulation. Train smarter. Assess better.</p>
            </div>
            
            <div className="footer-section">
              <h3>Contact</h3>
              <a href="mailto:hello@theiaxr.com">hello@theiaxr.com</a>
              <a href="tel:+1XXXXXXXXX">+1 (XXX) XXX-XXXX</a>
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