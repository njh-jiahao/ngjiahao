import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <Head>
        <title>Jia Hao Ng | Bioinformatics & Data Science</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/DP.png" />
        <link rel="apple-touch-icon" href="/images/DP.png" />
        <link rel="icon" sizes="192x192" href="/images/DP.png" />
      </Head>

      <div className="container">
        <header>
          <div className="header-content">
            <Image 
              src="/images/DP.png" 
              alt="Jia Hao Ng" 
              className="profile-pic"
              width={100}
              height={100}
              priority
            />
            <div className="header-text">
              <h1><Link href="/">Jia Hao Ng</Link></h1>
              <p className="subtitle">Bioinformatics & Data Science</p>
            </div>
          </div>
          <nav>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#education">Education</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>

        <section id="about">
          <h2>About</h2>
          <p>Detail-oriented and analytical MSc Bioinformatics graduate with a strong foundation in data science, machine learning, and statistical analysis. Proficient in Python and SQL, with experience in data processing, visualization, and reporting.</p>
          
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Machine Learning/AI: CNN, LSTM, DeepLabv3, Oversampling</li>
              <li>Programming: Python, R, Bash, TensorFlow, PyTorch</li>
              <li>Data Analysis: Pandas, NumPy, SciPy, OpenCV</li>
              <li>Web & Database: HTML, CSS, PHP, MySQL</li>
            </ul>
          </div>
          
          <a href="/CV_NJH.pdf" className="button" download>Download CV</a>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          
          <div className="project-grid">
            <Link href="/project1">
              <div className="project-card">
                <h3>Automated CVD Detection Using Deep Learning Segmentation of PLAX view Echocardiography & Multi-variable LSTM Analysis</h3>
                <p className="project-meta">Thesis (MSc Bioinformatics)</p>
                <p>This project focused on developing an AI-assisted diagnostic tool for cardiovascular disease (CVD) using echocardiographic...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project2">
              <div className="project-card">
                <h3>GenPharmPro: A Relational Database for Drug-Disease-Target Interactions</h3>
                <p className="project-meta">Academic Project</p>
                <p>GenPharmPro is a relational database system developed to facilitate the exploration of complex interactions among drugs, diseases, and biological targets. Designed as part...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project3">
              <div className="project-card">
                <h3>Online System for Bioinformatics Data & Knowledge Sharing</h3>
                <p className="project-meta">Web System</p>
                <p>Created a multi-page web system demonstrating how internet programming supports biological data integration...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project4">
              <div className="project-card">
                <h3>Protein Structure Prediction & Molecular Docking Analysis</h3>
                <p className="project-meta">Academic Project</p>
                <p>A comprehensive bioinformatics pipeline was developed for protein structure prediction. It includes homology modelling, molecular dynamics...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          
          <div className="education-item">
            <div className="education-header">
              <h3>MSc Bioinformatics</h3>
              <span className="education-date">Sep 2023 – Dec 2024</span>
            </div>
            <p className="education-institution">Universiti Malaya, Kuala Lumpur, Malaysia</p>
            <div className="education-details">
              <p>Thesis: &quot;Automated Cardiovascular Disease Detection Using Deep Learning Segmentation of PLAX View Echocardiography and Multi-Variable LSTM Analysis&quot;</p>
              <p>Utilized U-Net model for echocardiographic segmentation and developed LSTM model for disease classification</p>
              <p>Developed Python and R programming skills, along with tools like GROMACS, Chimera, and VMD</p>
              <p>Created web pages to host projects, built databases & systems with MySQL, PHP & HTML</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>BSc (Hons) Nutrition</h3>
              <span className="education-date">Sep 2016 – Jul 2019</span>
            </div>
            <p className="education-institution">University of Nottingham, Semenyih, Malaysia & Nottingham, UK</p>
            <div className="education-details">
              <p>Thesis: &quot;Micronutrients (Vitamin C and Zinc) and their impact on DNA damage - a literature review&quot;</p>
              <p>Excelled academically and received exchange opportunity to University of Nottingham UK</p>
              <p>Explored health issues and solutions via pharmacology and lifestyle interventions</p>
              <p>Active Music Society member and volunteer</p>
            </div>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Research Assistant (Part-time)</h3>
              <span className="experience-date">Sep 2023 - Current</span>
            </div>
            <p className="experience-company">University of Nottingham, Semenyih, Malaysia</p>
            <div className="experience-details">
              <p>Collected and managed research data</p>
              <p>Completed ad hoc tasks including literature reviews and data entry</p>
              <p>Assisted with manuscript preparation</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Branch Manager</h3>
              <span className="experience-date">March 2023 – September 2023</span>
            </div>
            <p className="experience-company">Sunway Multicare Pharmacy, Petaling Jaya, Malaysia</p>
            <div className="experience-details">
              <p>Managed daily operations including sales, inventory, and staffing</p>
              <p>Increased monthly sales by 20% through inventory optimization</p>
              <p>Reduced stock discrepancies by 20% through improved processes</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Nutritionist</h3>
              <span className="experience-date">July 2021 - March 2023</span>
            </div>
            <p className="experience-company">Sunway Multicare Pharmacy, Petaling Jaya, Malaysia</p>
            <div className="experience-details">
              <p>Assessed customer needs and recommended products</p>
              <p>Organized sales event generating RM75,000 in revenue</p>
              <p>Provided staff training and managed schedules</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Feel free to reach out for collaborations or just to say hello!</p>
          
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:jiahao.njh@gmail.com">jiahao.njh@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Puchong, Selangor, Malaysia</p>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/jia-hao-ng-813237160" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/njh-jiahao" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/ng_jia_hao" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </section>

        <footer>
          <p>&copy; {new Date().getFullYear()} Jia Hao Ng. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}