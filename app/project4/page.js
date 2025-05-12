"use client";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Project4() {
  useEffect(() => {
    // Close all by default on page load
    const contents = document.querySelectorAll('.phase-content');
    contents.forEach(content => {
      content.style.display = 'none';
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
  }, []);

  const togglePhase = (button) => {
    const phase = button.parentElement;
    const content = phase.querySelector('.phase-content');
    const icon = button.querySelector('i');
    
    // Toggle display
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    
    // Rotate icon
    icon.style.transform = content.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    
    // Adjust margin when closed
    phase.style.marginBottom = content.style.display === 'none' ? '1rem' : '3rem';
  };

  return (
    <div className="container">
      <Head>
        <title>Protein Structure Prediction & Docking | Jia Hao Ng</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
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
            />
            <div className="header-text">
              <h1><Link href="/">Jia Hao Ng</Link></h1>
              <p className="styles.subtitle">Bioinformatics & Data Science</p>
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
          <h2>Protein Structure Prediction & Molecular Docking Analysis</h2>
          <p className="project-meta">Academic Project • Universiti Malaya • 2023</p>
          
          <div className="project-content">
            <h3>Overview</h3>
            <p>A comprehensive bioinformatics pipeline was developed for protein structure prediction. It includes homology modelling, molecular dynamics simulation using GROMACS, and molecular docking analysis with AutoDock. This pipeline was utilised for identifying potential binding sites and ligand interactions.</p>
            
            <div className="project-phases">
              {/* Protein Structure Prediction */}
              <div className="phase">
                <div className="phase">
                  <button className="phase-header" onClick={(e) => togglePhase(e.currentTarget)}>
                    <h3>1. Protein Structure Prediction (Modeller)</h3>
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="phase-content">
                    <div className="phase-step">
                      <h4>Templates Identification</h4>
                      <p>Identified suitable template structures from PDB database for homology modeling</p>
                      <Image 
                        src="/images/CADDtemplates.png" 
                        alt="Template identification" 
                        width={500}
                        height={250}
                      />
                    </div>
                    <div className="phase-step">
                      <h4>Model Building</h4>
                      <ul>
                        <li><strong>salign.py</strong>: Multiple sequence alignment of templates</li>
                        <li><strong>align2d.py</strong>: Query-template alignment</li>
                        <li><strong>model_mult.py</strong>: 3D homology model generation</li>
                      </ul>
                      <Image 
                        src="/images/CADDmodel-building.png" 
                        alt="Model building process" 
                        width={500}
                        height={150}
                      />
                    </div>
                    <div className="phase-step">
                      <h4>Model Validation</h4>
                      <p>Evaluated model quality using Ramachandran plots and GNU plot analysis</p>
                      <Image 
                        src="/images/CADD_GNUplot.png" 
                        alt="Ramachandran plot" 
                        width={500}
                        height={360}
                      />
                      <Image 
                        src="/images/CADDramachandran.png" 
                        alt="Ramachandran plot"
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Molecular Simulation */}
              <div className="phase">
                <button className="phase-header" onClick={(e) => togglePhase(e.currentTarget)}>
                  <h3>2. Molecular Simulation (GROMACS)</h3>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="phase-content">
                  <div className="phase-step">
                    <h4>System Preparation</h4>
                    <ul>
                      <li>Added force field parameters (AMBER99SB-ILDN)</li>
                      <li>Solvated system in TIP3P water model</li>
                      <li>Neutralized system with ions</li>
                    </ul>
                    <Image 
                      src="/images/CADDsolvation.png" 
                      alt="System solvation" 
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="phase-step">
                    <h4>Energy Minimization</h4>
                    <p>Performed steepest descent algorithm to remove steric clashes</p>
                    <Image 
                      src="/images/CADDenergy-min.png" 
                      alt="Energy minimization" 
                      width={400}
                      height={280}
                    />
                  </div>
                  <div className="phase-step">
                    <h4>Production Run</h4>
                    <p>Executed 5ns molecular dynamics simulation (2,500,000 steps)</p>
                  </div>
                  <div className="phase-step">
                    <h4>Simulation Analysis</h4>
                    <p>Evaluated stability using RMSD and RMSF metrics</p>
                    <Image 
                      src="/images/CADD_RMSD.png" 
                      alt="RMSD analysis" 
                      width={400}
                      height={240}
                    />
                    <Image 
                      src="/images/CADD_RMSF.png" 
                      alt="RMSF analysis" 
                      width={400}
                      height={240}
                    />
                  </div>
                </div>
              </div>
              
              {/* Molecular Docking */}
              <div className="phase">
                <button className="phase-header" onClick={(e) => togglePhase(e.currentTarget)}>
                  <h3>3. Molecular Docking (AutoDock)</h3>
                  <i className="fas fa-chevron-down"></i>
                </button>
                <div className="phase-content">
                  <div className="phase-step">
                    <h4>System Preparation</h4>
                    <ul>
                      <li>Converted frame with lowest energy level to PDB format</li>
                      <li>Prepared protein and ligand in PDBQT format</li>
                    </ul>
                    <Image 
                      src="/images/CADDdocking-prep.png" 
                      alt="Docking preparation" 
                      width={400}
                      height={240}
                    />
                    <Image 
                      src="/images/CADD-PDBQT.png" 
                      alt="PDBQT preparation"
                      width={600}
                      height={340}
                    />
                  </div>
                  <div className="phase-step">
                    <h4>AutoGrid Setup</h4>
                    <p>Generated grid maps for binding affinity evaluation</p>
                    <Image 
                      src="/images/CADDautogrid.png" 
                      alt="AutoGrid setup" 
                      width={400}
                      height={240}
                    />
                  </div>
                  <div className="phase-step">
                    <h4>Docking Analysis</h4>
                    <ul>
                      <li>Predicted binding modes and energies</li>
                      <li>Identified potential binding sites</li>
                      <li>Visualized interactions in Chimera and LigPlot</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <h3>Key Findings</h3>
            <div className="findings">
              <div className="finding">
                <Image 
                  src="/images/CADDbinding-site.png" 
                  alt="Primary binding site" 
                  width={500}
                  height={240}
                />
                <p>Identified primary binding site with strong interaction energy</p>
              </div>
              <div className="finding">
                <Image 
                  src="/images/CADDligand-interactions.png" 
                  alt="Ligand interactions" 
                  width={500}
                  height={240}
                />
                <p>Detailed hydrogen bonding and hydrophobic interactions analysis</p>
              </div>
            </div>
            
            <h3>Tools Used</h3>
            <div className="tech-tags">
              <span className="tag">Modeller</span>
              <span className="tag">GROMACS</span>
              <span className="tag">AutoDock</span>
              <span className="tag">Python</span>
              <span className="tag">Chimera</span>
              <span className="tag">LigPlot</span>
            </div>
            
            <Link href="/#projects" className="button back-button">← Back to Projects</Link>
          </div>
        </main>

        <footer>
          <p>&copy; <span id="year"></span> Jia Hao Ng. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
