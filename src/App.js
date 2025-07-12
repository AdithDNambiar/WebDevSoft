import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import BlogSection from './components/BlogSection';
import TeamSection from './components/TeamSection';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);
// Handle modal open
const openCertificateModal = (imgSrc, title) => {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalCertificateImage");
  const modalTitle = document.getElementById("modalCertificateTitle");

  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modal.style.display = "flex";
};

// Handle modal close
const closeCertificateModal = () => {
  const modal = document.getElementById("certificateModal");
  const modalImg = document.getElementById("modalCertificateImage");

  modal.style.display = "none";
  modalImg.src = "";
};

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="about-section" id="home">
        <div className="text-container">
          <h2>About Us — <span className="highlight">WebDevSoft</span></h2>
          <p>
            At WebDevSoft, we’re passionate about turning ideas into powerful digital experiences.
            We are a dedicated team of developers, designers, and digital strategists committed
            to building modern, high-performance websites and software solutions tailored to your
            business needs.
          </p>
        </div>
        <div className="image-container">
          <img src="/Floating.png" alt="Floating cartoon" />
        </div>
      </section>

      <section className="internships-section" id="internships">
          <h2 className="internship-title">
               <span className="highlight">WebDevSoft</span> Internship Tracks
          </h2>

          <div className="internship-grid">
          {[
           {
             title: "Software Development",
             desc: "Build complete software systems while exploring object-oriented principles and engineering best practices.",
             img: "/Software code testing-amico.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Web Development",
             desc: "Learn to create websites that look great and work well on all devices.",
             img: "/Open source-cuate.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Full Stack Development",
             desc: "Work on both the client-side and server-side of web apps.",
             img: "/fullstack.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "UI/UX Design",
             desc: "Design easy-to-use and visually appealing interfaces.",
             img: "/UIUX Design.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Android Development",
             desc: "Create Android apps using Kotlin and Jetpack tools.",
             img: "/Android Development.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Data Science",
             desc: "Explore data handling, statistics, and predictive modeling.",
             img: "/Data Science.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Machine Learning",
             desc: "Develop models that learn from data and predict outcomes.",
             img: "/Machine Learning.jpg",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Business Intelligence",
             desc: "Turn business data into meaningful insights and dashboards.",
             img: "/Business analytics-cuate.png",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Python Developer",
             desc: "Work with Python to automate tasks and build applications.",
             img: "/Python Developer.jpg",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Power BI",
             desc: "Create dashboards and visualize data with Power BI.",
             img: "/Power BI.jpg",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
           {
             title: "Data Visualization (Excel)",
             desc: "Master charts, dashboards, and reports using Excel tools.",
             img: "/datav.jpg",
             link: "https://docs.google.com/forms/d/e/1FAIpQLSft_kHT2hRli8aMJUQINIBYdBfIRkrSTD0U-4rwn2bFP6ts9w/viewform",
           },
         ].map((item, index) => (
          <div className="card" key={index}>
             <img src={item.img} alt={item.title} />
             <h3>{item.title}</h3>
             <p>{item.desc}</p>
             <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="apply-btn">Apply Now</button>
             </a>
          </div>
       ))}

      {/* Last card — Verify Certificate */}
        <div className="card verify-card">
         <img src="/certificate.png" alt="Verify Certificate" />
         <h3>Verify Your Certificate</h3>
         <a href="https://www.webdevsoft.com/verify.html" target="_blank" rel="noopener noreferrer">Click to Verify</a>

        </div>
      </div>
     </section>
     
     <section id="internship-features" className="features-section">
  <div id="starfield" aria-hidden="true"></div>
  <div className="container">
    <h2 className="section-title">Features of our Internships</h2>
    <div className="features-grid">

      {/* Verified Certificates */}
      <div className="feature-card" style={{ "--feature-color": "var(--neon-blue)" }}>
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M333.1 128C333.1 74.9 378.1 32 429.1 32h1.1C482.3 32 512 59.7 512 112.9V400c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h173.1zM224 336c0 8.8 7.2 16 16 16h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16zm16-64h80c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16z" opacity="0.4" />
            <path d="M192 64C192 28.7 163.3 0 128 0S64 28.7 64 64v32H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h176c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-16V64zM128 64c0-17.7 14.3-32 32-32s32 14.3 32 32V96H96V64c0-17.7 14.3-32 32-32z"/>
          </svg>
        </div>
        <h3>Verified Certificates</h3>
        <p>Get industry-recognized certificates to prove your skills and hard work.</p>
      </div>

      {/* High-quality Content */}
      <div className="feature-card standout" style={{ "--feature-color": "var(--neon-pink)" }}>
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
            <path d="M288 32c-8.1 0-16.1 1.4-23.7 4.1L32.4 125.4C12.8 133.4 0 151.7 0 172.3V339.7c0 20.6 12.8 38.9 32.4 46.9l231.9 89.2c7.6 2.8 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l231.9-89.2c19.6-8 32.4-26.3 32.4-46.9V172.3c0-20.6-12.8-38.9-32.4-46.9L311.7 36.1C304.1 33.4 296.1 32 288 32z" opacity="0.4" />
            <path d="M288 128c-8.1 0-16.1 1.4-23.7 4.1L32.4 221.4C12.8 229.4 0 247.7 0 268.3V435.7c0 20.6 12.8 38.9 32.4 46.9l231.9 89.2c7.6 2.8 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l231.9-89.2c19.6-8 32.4-26.3 32.4-46.9V268.3c0-20.6-12.8-38.9-32.4-46.9L311.7 132.1C304.1 129.4 296.1 128 288 128z"/>
          </svg>
        </div>
        <h3>High-quality Content</h3>
        <p>Access premium content designed to prepare you for a future career.</p>
      </div>

      {/* Hands-on Experience */}
      <div className="feature-card" style={{ "--feature-color": "var(--neon-green)" }}>
        <div className="feature-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" opacity="0.4"/>
            <path d="M496 128c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-112 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-112 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/>
          </svg>
        </div>
        <h3>Hands-on Experience</h3>
        <p>Gain practical experience by working on real-world projects.</p>
      </div>

    </div>
  </div>
</section>

  <BlogSection />
     <section className="proven-results">
      <h2>Proven Results</h2>
      <p>Trusted by global clients and backed by solid numbers.</p>

      <div className="stats-grid">
       <div className="stat-card green">
        <h3>100</h3>
        <p>HAPPY CLIENTS</p>
       </div>
       <div className="stat-card red">
        <h3>75+</h3>
        <p>PROJECTS COMPLETED</p>
       </div>
       <div className="stat-card blue">
        <h3>99.9%</h3>
        <p>SATISFACTION RATE</p>
       </div>
       <div className="stat-card yellow">
        <h3>15+</h3>
        <p>COUNTRIES SERVED</p>
       </div>
      </div>
     </section>

     <section id="services" className="core-services">
      <h2 className="section-title">Our Core Services</h2>
      <p className="section-subtext">
        We build and deliver robust, scalable, and high-performance software solutions tailored to your business needs.
      </p>

      <div className="services-grid">
       <div className="service-card">
        <h3>Web Development</h3>
        <p>Creating responsive, high-performance websites and web applications using modern technologies.</p>
       </div>
       <div className="service-card">
        <h3>Mobile App Development</h3>
        <p>Building intuitive and engaging native and cross-platform mobile apps for iOS and Android.</p>
       </div>
       <div className="service-card">
        <h3>Custom Software Solutions</h3>
        <p>Designing bespoke software from the ground up to solve unique business challenges.</p>
       </div>
       <div className="service-card">
        <h3>UI/UX Design</h3>
        <p>Crafting beautiful, user-centric interfaces that are functional and easy to use.</p>
       </div>
       <div className="service-card">
        <h3>Cloud & DevOps</h3>
        <p>Automating your development pipeline and managing scalable cloud infrastructure.</p>
       </div>
       <div className="service-card">
        <h3>Data & AI Solutions</h3>
        <p>Leveraging your data to build intelligent systems, from engineering to dashboards.</p>
       </div>
      </div>
     </section>
     <section id="process" class="process-section">
  <div class="container">
    <h2 class="section-title">Our Development Process</h2>
    <p class="section-subtitle">
      We follow a proven, agile methodology to ensure your project is delivered on time, on budget, and to the highest quality standards.
    </p>

    <div class="process-timeline">

      
      <div class="process-step">
        <div class="process-icon-wrapper">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          
          <div class="step-number">1</div>
        </div>
        <div class="process-content">
          <h3>Discovery & Strategy</h3>
          <p>We begin by understanding your vision, goals, and audience through research, stakeholder interviews, and planning a clear roadmap.</p>
        </div>
      </div>

      
      <div class="process-step">
        <div class="process-icon-wrapper">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a2.25 2.25 0 012.4-2.245 4.5 4.5 0 00-8.4 2.245c0 .399.078.78.22 1.128z" />
            </svg>
          </div>
          
          <div class="step-number">2</div>
        </div>
        <div class="process-content">
          <h3>UI/UX Design</h3>
          <p>We craft wireframes, mockups, and user flows that deliver engaging, beautiful, and user-centered experiences.</p>
        </div>
      </div>

      
      <div class="process-step">
        <div class="process-icon-wrapper">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12" />
            </svg>
          </div>
          
          <div class="step-number">3</div>
        </div>
        <div class="process-content">
          <h3>Development</h3>
          <p>Using agile methods, we build your product with clean, scalable code and provide regular builds for feedback.</p>
        </div>
      </div>

           <div class="process-step">
        <div class="process-icon-wrapper">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <div class="step-number">4</div>
        </div>
        <div class="process-content">
          <h3>Testing & QA</h3>
          <p>We rigorously test across devices and platforms to ensure your product is secure, stable, and high-performing.</p>
        </div>
      </div>

      
      <div class="process-step">
        <div class="process-icon-wrapper">
          <div class="process-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.956 14.956 0 01-5.84 7.38m-5.84-7.38l-2.06-2.06a14.956 14.956 0 017.38-5.84m-7.38 5.84l2.06 2.06M15.59 14.37l2.06-2.06a14.956 14.956 0 00-7.38-5.84m7.38 5.84l-2.06-2.06" />
            </svg>
          </div>
      
          <div class="step-number">5</div>
        </div>
        <div class="process-content">
          <h3>Deployment & Launch</h3>
          <p>We set up cloud infrastructure and deploy your solution, monitoring for stability and success post-launch.</p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="industries-section" id="industries">
  <div className="container">
    <div className="section-header">
      <p className="subheading">Trusted by All Industry Sectors</p>
      <h2>Top Industries</h2>
    </div>

    <div className="industry-carousel">
      <div className="industry-track">
        {[
          { name: "Travel & Tourism", icon: "travel_18306010.png" },
          { name: "Banking & Finance", icon: "bank_3140457.png" },
          { name: "Media & Entertainment", icon: "social-media_2643405.png" },
          { name: "Hotels & Restaurant", icon: "full-service_5236906.png" },
          { name: "Healthcare Solution", icon: "positivity_17367132.png" },
          { name: "Elearning & Education", icon: "cloud-data_18322096.png" },
          { name: "Web Development", icon: "coding-language_2905983.png" },
          { name: "Travel & Tourism", icon: "travel_18306010.png" }, // duplicated
          { name: "Banking & Finance", icon: "bank_3140457.png" },   // duplicated
          { name: "Media & Entertainment", icon: "social-media_2643405.png" } // duplicated
        ].map((item, idx) => (
          <div className="industry-card" key={idx}>
            <div className="industry-icon-circle">
              <img
                src={process.env.PUBLIC_URL + `/icon/${item.icon}`}
                alt={`${item.name} Icon`}
                loading="lazy"
              />
            </div>
            <span className="industry-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


<section id="projects" className="projects-section">
  <div className="container">
    <h2 className="section-title">Our Work</h2>
    <p className="section-subtitle">
      A selection of projects that showcase our passion for creating innovative digital solutions.
    </p>

    <div className="projects-grid">
      {/* Project Card: E-commerce Platform */}
      <div className="project-card">
        <div className="project-image">
          <img src="/Project 1 E-commerce.jpg" alt="E-commerce Platform Project" loading="lazy" />
        </div>
        <div className="project-content">
          <div className="project-tags">
            <span>Web App</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
          <h3>E-commerce Platform</h3>
          <p>
            A custom-built online store with secure payment integration, product management, and a user-friendly admin panel.
          </p>
        </div>
      </div>

      {/* Project Card: Mobile Banking App */}
      <div className="project-card">
        <div className="project-image">
          <img src="/project2.png" alt="Mobile Banking App Project" loading="lazy" />
        </div>
        <div className="project-content">
          <div className="project-tags">
            <span>Mobile App</span>
            <span>UI/UX</span>
            <span>FinTech</span>
          </div>
          <h3>Mobile Banking App</h3>
          <p>
            An intuitive and secure mobile banking application for iOS and Android platforms.
          </p>
        </div>
      </div>

      {/* Project Card: Analytics Dashboard */}
      <div className="project-card">
        <div className="project-image">
          <img src="/project 3.png" alt="Data Analytics Dashboard Project" loading="lazy" />
        </div>
        <div className="project-content">
          <div className="project-tags">
            <span>Data & AI</span>
            <span>Power BI</span>
          </div>
          <h3>Analytics Dashboard</h3>
          <p>
            A powerful BI dashboard for visualizing sales data and discovering key market trends.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* TESTIMONIALS SECTION */}
<section id="testimonials" className="testimonials-section">
  <div className="container">
    <h2 className="section-title">What Our Clients Say</h2>
    <p className="section-subtitle">
      We are proud to have earned the trust of a diverse range of clients.
    </p>

    <div className="testimonials-grid">
      {/* Testimonial 1 */}
      <div className="testimonial-card">
        <div className="testimonial-content">
          <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"
            />
          </svg>
          <blockquote>
            Wow, WebDevSoft seriously upgraded our online presence! Their team built us a beautiful, super fast website,
            and they somehow managed to do it exactly on time and within budget. Honestly, keeping us updated every step
            of the way was fantastic too.
          </blockquote>
        </div>
        <div className="testimonial-author">
          <img src="author1.png" alt="Naysha Singh" loading="lazy" />
          <div className="author-info">
            <h4>Naysha</h4>
            <p>CEO & Founder</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="testimonial-card">
        <div className="testimonial-content">
          <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z"
            />
          </svg>
          <blockquote>
            Wow, the mobile app they built? It totally blew us away! It's so simple to use, lightning fast, and our
            users absolutely love it. You can tell their team is really professional and super talented. We'd definitely
            recommend them!
          </blockquote>
        </div>
        <div className="testimonial-author">
          <img src="/author.2png.jpg" alt="Sudhanshu Shah" loading="lazy" />
          <div className="author-info">
            <h4>Sudhanshu Shah</h4>
            <p>Founder, Food & Corporate</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* CALL TO ACTION SECTION */}
<section id="cta" className="cta-section">
  <div className="container">
    <h2 className="section-title">Ready to Start Your Project?</h2>
    <p>
      Let's work together to build something amazing. We're here to turn your vision into a reality.
    </p>
    <a href="#contact" className="cta-button">Get a Free Quote</a>
  </div>
</section>
<section id="contact" className="cs-contact-section">
        <h1>Contact us</h1>
        <ul className="cs-bubbles" aria-hidden="true">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>

        <div className="cs-container">
          {/* Left: Contact Info Only */}
          <div className="cs-info-card">
            <div className="cs-contact-info">
              <h2>Email Address</h2>
              <p><a href="mailto:webdevsoftit@gmail.com">webdevsoftit@gmail.com</a></p>
              <hr />
              <h2>Office Location</h2>
              <p>Patna, Bihar</p>
              <hr />
              <h2>Social Media</h2>
              <div className="cs-social-links">
                <a
                  href="https://www.facebook.com/WebDevsoft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src="facebook.png" alt="Facebook" className="cs-social-icon" />
                </a>
                <a
                  href="https://www.instagram.com/webdevsoftit"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img src="instagram.png" alt="Instagram" className="cs-social-icon" />
                </a>
                <a
                  href="https://twitter.com/webdevsoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src="twitter.png" alt="Twitter" className="cs-social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/webdevsoft-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src="linkedin.jpg" alt="Twitter" className="cs-social-icon" />
                </a>
              </div>

              {/* Contact Us Button */}
              <div style={{ marginTop: "30px" }}>
                <a href="#form-section" className="cs-contact-button">
                  Fill Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION BELOW */}
      <section id="form-section" className="cs-form-section">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdDdfCF3kO2733hRrJH38PoP10bK1KgfTo8lEWLkr2836UY7w/viewform?embedded=true"
          title="Google Form"
          width="100%"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ border: "none" }}
        >
          Loading…
        </iframe>
      </section>


{/* CERTIFICATES SECTION */}
<section className="cs-certificates-section">
  <h2 className="cs-certificates-heading">Our Certificates</h2>
  <div className="cs-certificate-carousel-wrapper">
    <div className="cs-certificate-carousel" id="cs-carousel">
      {[
        "important .jpg", "computatia.png", "courcer link.jpg", "courceraex.jpg", "exin.jpg",
        "gees.jpg", "google.png", "html.jpg", "lecture.png", "java.jpg", "nlp.jpeg",
        "oneroad.jpg", "redhacka.jpg", "wordpres.jpg"
      ].map((file, idx) => (
        <div className="cs-certificate-slide" key={idx}>
          <img
            src={`/Certificate/${file}`}
            alt={`Certificate ${idx + 1}`}
            className="cs-certificate-img"
            loading="lazy"
            onClick={() => openCertificateModal(`/Certificate/${file}`, file)}
          />
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  <div id="certificateModal" className="cs-certificate-modal" role="dialog" aria-modal="true" aria-labelledby="modalCertificateTitle">
    <div className="cs-modal-content">
      <button className="cs-close-modal" aria-label="Close Certificate Modal" onClick={closeCertificateModal}>×</button>
      <img src="" alt="Full-size certificate" id="modalCertificateImage" className="cs-modal-img" />
      <p id="modalCertificateTitle" className="cs-modal-title"></p>
    </div>
  </div>
</section>
<TeamSection />


<Footer />

    </div>
  );
}

export default App;
