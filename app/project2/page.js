import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true
}

export const metadata = {
  title: 'GenPharmPro | Jia Hao Ng',
  icons: {
    icon: '/images/DP.png',
    apple: '/images/DP.png',
    shortcut: '/images/DP.png',
  },
}

export default function Project2() {
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <Image 
            src="/images/DP.png" 
            alt="Jia Hao Ng" 
            className="profile-pic"
            width={100}
            height={100}
          />
          <div className="header-text">
            <h1><Link href="/">Jia Hao Ng</Link></h1>
            <p className="subtitle">Bioinformatics & Data Science</p>
          </div>
        </div>
        <nav>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <main className="project-detail">
        <h2>GenPharmPro: A Relational Database for Drug-Disease-Target Interactions</h2>
        <p className="project-meta">Academic Project • Universiti Malaya • 2023</p>
        
        <div className="project-content">
          <h3>Overview</h3>
          <p>GenPharmPro is a relational database system developed to facilitate the exploration of complex interactions among drugs, diseases, and biological targets. Designed as part of a postgraduate academic project in bioinformatics, this platform enables researchers, healthcare professionals, and students to query, visualize, and analyze pharmacological relationships, thereby supporting drug discovery, disease understanding, and target identification.

            <br /><br />The system addresses the growing need for integrated data management in pharmacogenomics and systems biology by compiling structured datasets and presenting them through a user-friendly web interface.</p>
          
          <h3>Technical Details</h3>
          <p>GenPharmPro is built upon a structured relational database architecture that consists of six primary tables:</p>
          <div className="project-images">
            <Image 
              src="/images/GPP_ERD.png" 
              alt="Target interface"
              width={800}
              height={600}
            />
          </div>
          <p>Each table is normalized to reduce redundancy and support efficient querying. The system supports SQL-based operations and includes views for simplified data exploration.</p>
          
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            <span className="tag">MySQL</span>
            <span className="tag">PHP</span>
            <span className="tag">HTML/CSS</span>
            <span className="tag">Database Design</span>
            <span className="tag">Database Development Life Cycle</span>
            <span className="tag">Pharmacology</span>
          </div>
          
          <h3>Key Features</h3>
          <ul>
            <li>Advanced Query System: Enables users to search for specific drug-disease-target combinations.</li>
            <li>Visual Representation: Pathway and interaction maps provide intuitive understanding of complex relationships.</li>
            <li>Expandable Architecture: Designed for easy integration with external APIs and omics datasets in future developments.</li>
          </ul>

          <h3>Impact</h3>
          <p>GenPharmPro serves as a foundational tool for promoting translational bioinformatics and enhancing pharmaceutical research. By integrating drug, disease, and target data into a centralized, relational framework, the system could:</p>
            <ul>
              <li>Bridge Knowledge Gaps: Facilitates cross-domain insights between pharmacology, molecular biology, and clinical research.</li>
              <li>Support Precision Medicine: Assists in identifying potential drug repurposing opportunities and understanding molecular mechanisms of disease.</li>
              <li>Enhance Education: Acts as a valuable educational resource for students learning about database systems, drug-target interactions, and bioinformatics tools.</li>
              <li>Promote Reproducible Research: Encourages structured data use and reproducible methodologies by providing a clean, relational format for data access and queries.</li>
            </ul>
          <p>The platform not only demonstrates the practical application of internet programming and relational database design in the bioinformatics domain but could also lays the groundwork for future enhancements such as multi-omics integration, machine learning analysis, and public-facing data portals.</p>
          
          <div className="project-images">
            <Image 
              src="/images/GPPQuery.png" 
              alt="Query interface"
              width={800}
              height={600}
            />
            <p>Query interface for GenPharmPro.</p>
            <Image 
              src="/images/GPPResult.png" 
              alt="Results interface"
              width={800}
              height={600}
            />
            <p>Results interface for GenPharmPro.</p>
            <Image 
              src="/images/GPPDrug.png" 
              alt="Drug interface"
              width={800}
              height={600}
            />
            <p>Drug information page.</p>
            <Image 
              src="/images/GPPTarget.png" 
              alt="Target interface"
              width={800}
              height={600}
            />
            <p>Target information page with KEGG pathway(s).</p>
          </div>

          <h3>Group member</h3>
          <p>Cao Yu</p>
          
          <Link href="/#projects" className="button back-button">← Back to Projects</Link>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Jia Hao Ng. All rights reserved.</p>
      </footer>
    </div>
  );
}