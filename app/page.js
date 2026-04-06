import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true
};

export const metadata = {
  title: 'Jia Hao Ng | Bioinformatics & Clinical Research',
  description: 'MSc Bioinformatics graduate with expertise in clinical AI, medical imaging, and research coordination. Open to bioinformatics, health data, and clinical research roles.',
  icons: {
    icon: '/images/DP.png',
    apple: '/images/DP.png',
    shortcut: '/images/DP.png',
  },
};

export default function Home() {
  return (
    <>
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
              <p className="subtitle">Bioinformatics | Clinical Research | Health Data Science</p>
            </div>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section id="about">
          <h2>About</h2>
          <p>I am a research professional based in Malaysia with an MSc in Bioinformatics and a background spanning clinical research coordination, computational biology, and nutritional science.</p>
          <p>Currently, I coordinate human-subject research at the University of Nottingham Malaysia, where my work includes designing validation studies, obtaining ethics committee approval, managing informed consent for studies involving minors, and maintaining audit-ready documentation in line with GCP principles. I collaborate with NTU Singapore and industry partners on research that bridges digital technology and cognitive assessment.</p>
          <p>My technical skills include machine learning applied to clinical imaging (deep learning segmentation of echocardiographic data), statistical analysis pipelines in Python and R, and database design. I hold a GCP certification aligned with ICH E6(R3) and am a published IEEE conference author.</p>
          <p>I am open to clinical research, bioinformatics, and health data opportunities locally and internationally.</p>
          
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li><strong>Clinical Research:</strong> GCP ICH E6(R3), Ethics Submissions, Informed Consent, Protocol Compliance, Audit-Ready Documentation</li>
              <li><strong>Machine Learning & AI:</strong> LSTM, CNN, DeepLabv3, TensorFlow, PyTorch, Medical Image Segmentation</li>
              <li><strong>Programming:</strong> Python, R, SQL, Bash</li>
              <li><strong>Data Analysis:</strong> Pandas, NumPy, SciPy, Scikit-learn, Statistical Analysis, Data Visualisation</li>
              <li><strong>Bioinformatics:</strong> GROMACS, Chimera, VMD, Molecular Dynamics</li>
              <li><strong>Web & Database:</strong> HTML, CSS, PHP, MySQL</li>
            </ul>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/CV_NJH.pdf" className="button" download>📄 Download CV (PDF)</a>
            <a href="#contact" className="button" style={{ background: 'var(--navy)' }}>📬 Contact Me</a>
          </div>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Research Associate</h3>
              <span className="experience-date">Jun 2025 – Current</span>
            </div>
            <p className="experience-company">University of Nottingham Malaysia, Semenyih, Malaysia</p>
            <div className="experience-details">
              <p>Designed and coordinated an equivalence study validating in-app cognitive assessments against gold-standard psychometric measures in children aged 6–9</p>
              <p>Led ethics committee submission, informed consent documentation, and cross-institutional protocol alignment with NTU Singapore</p>
              <p>Translated approved research protocols into technical specifications for software developers, ensuring accurate data capture and study compliance</p>
              <p>Maintained audit-ready study documentation in accordance with GCP principles and institutional data governance standards</p>
              <p>Partnered with academic and industry stakeholders (including Me Books) to present actionable research insights</p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Research Assistant</h3>
              <span className="experience-date">Sep 2023 – Aug 2024</span>
            </div>
            <p className="experience-company">University of Nottingham Malaysia, Semenyih, Malaysia</p>
            <div className="experience-details">
              <p>Collected, cleaned, and managed large-scale datasets supporting peer-reviewed research and conference publications</p>
              <p>Maintained structured research databases ensuring data accuracy, traceability, and reproducibility</p>
              <p>Co-authored an IEEE-published study integrating EEG neurofeedback, VR exercise gaming, and machine learning classification</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Branch Manager</h3>
              <span className="experience-date">Mar 2023 – Sep 2023</span>
            </div>
            <p className="experience-company">Sunway Multicare Pharmacy, Petaling Jaya, Malaysia</p>
            <div className="experience-details">
              <p>Managed regulated pharmacy operations including inventory control, compliance audits, and regulatory reporting for a team of 7 staff</p>
              <p>Increased monthly sales by 20% through optimised inventory management and staff development</p>
              <p>Reduced stock discrepancies by 20% through systematic audit and documentation procedures</p>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Nutritionist</h3>
              <span className="experience-date">Jul 2021 – Mar 2023</span>
            </div>
            <p className="experience-company">Sunway Multicare Pharmacy, Petaling Jaya, Malaysia</p>
            <div className="experience-details">
              <p>Delivered personalised nutrition and supplement consultations with detailed client record-keeping</p>
              <p>Led a sales campaign generating RM75,000 in revenue within two weeks</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          
          <div className="project-grid">
            <Link href="/project1" prefetch>
              <div className="project-card" style={{ borderTop: '3px solid var(--accent-color)' }}>
                <span className="badge badge-teal" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                  ⭐ Featured — MSc Thesis
                </span>
                <h3>Clinical AI for Cardiovascular Disease Detection</h3>
                <p className="project-meta">Deep Learning · Echocardiography · LSTM</p>
                <p>Developed an AI-assisted diagnostic tool using DeepLabv3 segmentation and LSTM classification on real-world echocardiographic data...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project2" prefetch>
              <div className="project-card">
                <h3>GenPharmPro: Drug-Disease-Target Database</h3>
                <p className="project-meta">MySQL · PHP · Relational Database</p>
                <p>A relational database system to explore complex interactions among drugs, diseases, and biological targets...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project3" prefetch>
              <div className="project-card">
                <h3>Bioinformatics Knowledge Sharing Platform</h3>
                <p className="project-meta">HTML · CSS · PHP · Web Development</p>
                <p>A multi-page web system demonstrating how internet programming supports biological data integration and collaboration...</p>
                <span className="read-more">Read more →</span>
              </div>
            </Link>
            
            <Link href="/project4" prefetch>
              <div className="project-card">
                <h3>Protein Structure Prediction & Docking</h3>
                <p className="project-meta">GROMACS · Chimera · Molecular Dynamics</p>
                <p>Comprehensive bioinformatics pipeline for homology modelling, molecular dynamics simulation, and docking analysis...</p>
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
              <p><strong>Thesis:</strong> Automated Cardiovascular Disease Detection Using Deep Learning Segmentation of PLAX View Echocardiography and Multi-Variable LSTM Analysis</p>
              <p>Developed a clinical AI diagnostic pipeline using DeepLabv3 segmentation and LSTM classification on real-world echocardiographic data</p>
              <p>Built end-to-end data preprocessing, statistical analysis, and visualisation pipelines in Python and R</p>
              <p>Applied GROMACS, Chimera, and VMD for protein structure analysis and molecular modelling</p>
              <p>Built a web interface and database using HTML, PHP, and MySQL to host project outputs</p>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>BSc (Hons) Nutrition</h3>
              <span className="education-date">Sep 2016 – Jul 2019</span>
            </div>
            <p className="education-institution">University of Nottingham, Semenyih, Malaysia & Nottingham, UK</p>
            <div className="education-details">
              <p>Selected for UK campus exchange in recognition of academic excellence</p>
              <p>Awarded Nottingham Advantage Award for peer mentoring and volunteering leadership</p>
              <p>Active Music Society member and performer in annual orchestral events</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>📬 Open to clinical research, bioinformatics, and health data opportunities — locally or internationally.</p>
          
          <div className="contact-info">
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:jiahao.njh@gmail.com">jiahao.njh@gmail.com</a></p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Puchong, Selangor, Malaysia</p>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/jia-hao-ng-813237160" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/njh-jiahao" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/ng_jia_hao" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a href="/CV_NJH.pdf" className="button" download style={{ background: 'var(--teal)' }}>
              📄 Download Full CV (PDF)
            </a>
          </div>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} Jia Hao Ng. All rights reserved. | Last updated April 2026</p>
        </footer>
      </div>
    </>
  );
}
