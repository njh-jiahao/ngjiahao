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
          <h2>Automated CVD Detection Using Deep Learning Segmentation of PLAX View Echocardiography &amp; Multi-Variable LSTM Analysis</h2>
          <p className="project-hero-sub">
            An AI pipeline that detects cardiovascular disease from heart ultrasound videos using deep learning — MSc thesis research at Universiti Malaya.
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
                Cardiovascular disease is the leading cause of death globally. Early detection through echocardiography is effective, but accurate interpretation requires experienced cardiologists — a resource that is scarce in many clinical settings, particularly in lower-resource environments. This project explored whether deep learning could automate the detection of two major CVD subtypes — Aortic Stenosis and Left Ventricular Hypertrophy — from routine heart ultrasound scans, reducing dependence on specialist availability and enabling more scalable cardiac screening.
              </p>
            </div>
          </div>

          <div className="project-section">
            <h3>What I Built</h3>
            <Image
              src="/images/SegEcho.png"
              alt="Segmented echocardiography frame showing left ventricle isolation"
              width={760}
              height={420}
              className="project-img"
            />
            <p className="img-caption">Segmented PLAX echocardiography frame — left ventricle region isolated by DeepLabv3</p>
            <p>
              I developed a two-stage AI diagnostic pipeline. In the first stage, a DeepLabv3 segmentation model isolates the left ventricle from each frame of a PLAX echocardiography video. In the second stage, motion features extracted from the segmented frames are passed through a multi-variable LSTM network that classifies cardiac patterns over time — distinguishing between healthy hearts and those showing signs of Aortic Stenosis or Left Ventricular Hypertrophy.
            </p>
            <p>
              Echocardiography videos are inherently noisy and temporally irregular. Missing frames were interpolated to ensure consistent feature mapping across sequences, and oversampling techniques were applied to address class imbalance in the dataset — a common and critical challenge when working with clinical data where abnormal cases are underrepresented.
            </p>
            <p>
              The aim was not to replace cardiologists, but to build a scalable screening tool capable of flagging high-risk cases in clinical environments where specialist review is delayed or unavailable.
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
              The model demonstrated strong and consistent performance across both cardiovascular subtypes. Aortic Stenosis detection achieved approximately 0.80 across all four metrics, while Left Ventricular Hypertrophy classification averaged around 0.78 for precision and accuracy. These results confirm the model&apos;s ability to identify major cardiovascular abnormalities from echocardiographic motion features alone, without requiring manual measurement by a clinician.
            </p>
            <div className="project-images">
              <Image
                src="/images/ThAS.png"
                alt="Classification results for Aortic Stenosis vs Control"
                width={700}
                height={400}
                className="project-img"
              />
              <p className="img-caption">Aortic Stenosis (AS) vs. Control — classification performance</p>
              <Image
                src="/images/ThLVH.png"
                alt="Classification results for Left Ventricular Hypertrophy vs Control"
                width={700}
                height={400}
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
              width={700}
              height={420}
              className="project-img"
            />
            <p className="img-caption">End-to-end pipeline: PLAX video input → segmentation → feature extraction → LSTM classification</p>
            <div className="method-steps">
              <div className="method-step">
                <span className="step-num">1</span>
                <p className="step-text"><strong>Segmentation:</strong> DeepLabv3 was used to segment the left ventricle region from individual PLAX echocardiography frames, providing a clean anatomical boundary for downstream feature extraction.</p>
              </div>
              <div className="method-step">
                <span className="step-num">2</span>
                <p className="step-text"><strong>Feature extraction:</strong> Motion-based cardiac features were derived from the segmented frames, capturing temporal changes in ventricular shape and movement across the cardiac cycle.</p>
              </div>
              <div className="method-step">
                <span className="step-num">3</span>
                <p className="step-text"><strong>Preprocessing:</strong> A curated dataset of echocardiogram videos was used. Missing frames were interpolated to ensure consistent temporal feature mapping, and class imbalance was addressed through oversampling.</p>
              </div>
              <div className="method-step">
                <span className="step-num">4</span>
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
            <h3>Honest Limitations</h3>
            <p className="limitations-intro">Every research project has constraints. These are mine — and they point directly to what future work should address.</p>
            <ul className="limitations-list">
              <li>Segmentation was not quantitatively evaluated using standard metrics such as Dice score or IoU, which would provide a more rigorous assessment of anatomical precision.</li>
              <li>The LSTM classifier was designed for binary classification only (CVD vs. non-CVD per subtype). It does not distinguish between specific severities or mixed presentations, limiting clinical utility in nuanced cases.</li>
              <li>Model interpretability techniques such as SHAP or Grad-CAM were not applied, reducing the ability to explain predictions to clinicians — a meaningful limitation for clinical trust and adoption.</li>
            </ul>
          </div>

          <div className="project-section">
            <h3>What&apos;s Next</h3>
            <p className="future-intro">These directions reflect where clinical AI for cardiac screening is heading — and where I hope to contribute further.</p>
            <div className="future-grid">
              <div className="future-card">
                <p className="future-card-title">Multimodal Integration</p>
                <p>Combine echocardiography with ECG signals, blood biomarkers, or clinical metadata to improve prediction robustness across patient populations.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">Explainable AI (XAI)</p>
                <p>Apply Grad-CAM or SHAP to visualise model decisions, increasing clinical interpretability and earning cardiologist trust in AI-assisted findings.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">Clinical Deployment</p>
                <p>Develop a lightweight web or mobile interface for real-world screening in clinical environments with limited specialist access.</p>
              </div>
              <div className="future-card">
                <p className="future-card-title">Real-Time Processing</p>
                <p>Optimise the pipeline for real-time video analysis and integration into point-of-care ultrasound systems for bedside use.</p>
              </div>
            </div>
          </div>

          <div className="project-cta">
            <div className="project-cta-text">
              <strong>Interested in clinical AI or computational research?</strong>
              <p>I&apos;m open to clinical research, bioinformatics, and health data opportunities globally.</p>
            </div>
            <div className="project-cta-buttons">
              <Link href="/#contact" className="button">Get in touch →</Link>
              <Link href="/#projects" className="button back-button">← Back to Projects</Link>
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
