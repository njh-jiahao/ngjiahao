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
  userScalable: true,
};

export const metadata = {
  title: 'Automated Cardiovascular Disease Detection | Jia Hao Ng',
  icons: {
    icon: '/images/DP.png',
    apple: '/images/DP.png',
    shortcut: '/images/DP.png',
  },
};

export default function Project1() {
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
            <p className="subtitle">Research Professional · GCP Certified · MSc Bioinformatics</p>
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

        <div className="project-hero">
          <h2>Automated CVD Detection Using Deep Learning Segmentation of PLAX Echocardiography & Multi-Variable LSTM Analysis</h2>
          <p className="project-hero-sub">
            An DL-based pipeline developed during my MSc thesis at Universiti Malaya to detect cardiovascular disease from echocardiography videos.
          </p>
          <div className="meta-badges">
            <span className="badge badge-navy">MSc Thesis</span>
            <span className="badge badge-navy">Universiti Malaya</span>
            <span className="badge badge-navy">2023–2024</span>
            <span className="badge badge-blue">Python</span>
            <span className="badge badge-blue">Deep Learning</span>
            <span className="badge badge-blue">Clinical Imaging</span>
            <span className="badge badge-blue">LSTM</span>
          </div>
        </div>

        <div className="project-content">

          <div className="project-section">
            <h3>The Problem</h3>
            <div className="problem-block">
              <p>
                Cardiovascular disease remains one of the leading causes of death worldwide. Echocardiography is widely used for early detection, but interpreting these scans accurately requires trained cardiologists. In many healthcare settings, especially those with limited resources, access to experienced specialists is not always available.
              </p>
              <p>
                This project investigated whether deep learning models could assist in detecting two major cardiovascular conditions — Aortic Stenosis (AS) and Left Ventricular Hypertrophy (LVH) — from routine echocardiography videos. The goal was to explore how automated analysis could support clinical screening and help identify high-risk cases earlier.
              </p>
            </div>
          </div>

          <div className="project-section">
            <h3>What I Built</h3>
            <Image
              src="/images/SegEcho.png"
              alt="Segmented echocardiography frame showing left ventricle isolation"
              width={500}
              height={500}
              className="project-img"
            />
            <p className="img-caption">Segmented PLAX echocardiography frame — left ventricle region isolated by DeepLabv3</p>
            <p>
              I designed a two-stage deep learning pipeline to analyse echocardiography videos.
            </p>
            <p>
              In the first stage, a DeepLabv3 segmentation model was used to isolate the left ventricle from each frame of a parasternal long-axis (PLAX) echocardiography video. This allowed the model to focus on the key anatomical region relevant to cardiac function.
            </p>
            <p>
              In the second stage, motion-related features extracted from the segmented frames were passed into a multi-variable LSTM model, which analysed temporal patterns across the cardiac cycle. The model classified sequences as either normal or showing characteristics of Aortic Stenosis or Left Ventricular Hypertrophy.
            </p>
            <p>
              Working with echocardiography videos presented several practical challenges. The videos were often noisy, and some contained missing frames. To address this, missing frames were interpolated to maintain consistent feature sequences. In addition, oversampling techniques were used to handle class imbalance, as abnormal cases were less frequent in the dataset.
            </p>
            <p>
              The intention of this work was not to replace clinical judgement, but to explore how automated tools could support early screening and assist clinicians in prioritising cases.
            </p>
          </div>

          <div className="project-section">
            <h3>Results</h3>
            <div className="metrics-grid">
              <div className="metric-card">
                <p className="metric-card-title">Aortic Stenosis Detection</p>
                <p className="metric-score">~0.80</p>
                <p className="metric-label">Precision · Recall · F1 · Accuracy</p>
              </div>
              <div className="metric-card">
                <p className="metric-card-title">LV Hypertrophy Detection</p>
                <p className="metric-score">~0.78</p>
                <p className="metric-label">Precision · Accuracy</p>
              </div>
            </div>
            <p className="cv-note">Evaluated using 5-fold cross-validation across both classification tasks.</p>
            <p>
              Overall, the model showed stable performance across both classification tasks. Detection of Aortic Stenosis achieved values close to 0.80 across multiple evaluation metrics, while Left Ventricular Hypertrophy classification achieved approximately 0.78 for precision and accuracy. These findings suggest that motion-based features derived from echocardiography videos can be used to identify key indicators of cardiovascular abnormalities without manual measurements.
            </p>
            <div className="project-images">
              <Image
                src="/images/ThAS.png"
                alt="Classification results for Aortic Stenosis vs Control"
                width={600}
                height={360}
                className="project-img"
              />
              <p className="img-caption">Aortic Stenosis (AS) vs. Control — classification performance</p>
              <Image
                src="/images/ThLVH.png"
                alt="Classification results for Left Ventricular Hypertrophy vs Control"
                width={600}
                height={360}
                className="project-img"
              />
              <p className="img-caption">LVH vs. Control — classification performance</p>
            </div>
          </div>

          <div className="project-section">
            <h3>Methodology</h3>
            <Image
              src="/images/ThMethod.png"
              alt="Pipeline diagram showing segmentation and LSTM classification stages"
              width={600}
              height={360}
              className="project-img"
            />
            <p className="img-caption">End-to-end pipeline: PLAX video input → segmentation → feature extraction → LSTM classification</p>
            <div className="method-steps">
              <div className="method-step">
                <p className="step-text"><strong>Segmentation:</strong> DeepLabv3 was used to segment the left ventricle region from individual PLAX echocardiography frames, providing a clean anatomical boundary for downstream feature extraction.</p>
              </div>
              <div className="method-step">
                <p className="step-text"><strong>Feature extraction:</strong> Motion-based cardiac features were derived from the segmented frames, capturing temporal changes in ventricular shape and movement across the cardiac cycle.</p>
              </div>
              <div className="method-step">
                <p className="step-text"><strong>Preprocessing:</strong> A curated dataset of echocardiogram videos was used. Missing frames were interpolated to ensure consistent temporal feature mapping, and class imbalance was addressed through oversampling.</p>
              </div>
              <div className="method-step">
                <p className="step-text"><strong>Classification:</strong> Extracted features were passed through a multi-variable LSTM model trained to detect abnormal cardiac patterns, evaluated using accuracy, precision, recall, and F1-score under 5-fold cross-validation.</p>
              </div>
            </div>
          </div>

          <div className="project-section">
            <h3>Tools Used</h3>
            <div className="tech-tags">
              {['Python', 'TensorFlow / Keras', 'PyTorch', 'DeepLabv3', 'LSTM', 'OpenCV', 'FFmpeg', 'Medical Imaging'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="project-section">
            <h3>Limitations</h3>
            <p className="limitations-intro">Like most research projects, this study had several limitations that could be addressed in future work.</p>
            <ul className="limitations-list">
              <li>Segmentation performance was not evaluated using quantitative metrics such as Dice score or Intersection over Union (IoU), which would provide a more objective measure of segmentation accuracy.</li>
              <li>The LSTM model was trained for binary classification tasks only (disease vs. control). It did not classify disease severity or handle overlapping cardiac conditions, which limits its potential clinical application.</li>
              <li>Model interpretability methods such as SHAP or Grad-CAM were not included. As a result, the model’s decision-making process was not directly visualised, which may affect clinical trust and adoption.</li>
            </ul>
          </div>

          <div className="project-section">
            <h3>What&apos;s Next</h3>
            <p className="future-intro">These directions reflect where clinical AI for cardiac screening is heading — and where I hope to contribute further.</p>
            <div className="future-grid">
              <div className="future-card">
                <p className="future-card-title">1. Multimodal Integration</p>
                <p>Combine echocardiography with ECG signals, blood biomarkers, or clinical metadata to improve prediction robustness across patient populations.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">2. Explainable AI (XAI)</p>
                <p>Apply Grad-CAM or SHAP to visualise model decisions, increasing clinical interpretability and earning cardiologist trust in AI-assisted findings.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">3. Clinical Deployment</p>
                <p>Develop a lightweight web or mobile interface for real-world screening in clinical environments with limited specialist access.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">4. Real-Time Processing</p>
                <p>Optimise the pipeline for real-time video analysis and integration into point-of-care ultrasound systems for bedside use.</p>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <div className="project-cta-text">
              <strong>Working on clinical AI or computational research?</strong>
              <p>I&apos;m open to clinical research, bioinformatics, and health data opportunities globally.</p>
            </div>
            <div className="project-cta-buttons">
              <Link href="/#contact" className="button">Get in touch →</Link>
              <Link href="/#projects" className="button">← Back to Projects</Link>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Jia Hao Ng. All rights reserved.</p>
      </footer>
    </div>
  );
}
