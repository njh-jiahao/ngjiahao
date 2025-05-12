import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function Project1() {
  return (
    <div className="container">
      <Head>
        <title>Automated Cardiovascular Disease Detection | Jia Hao Ng</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/images/DP.png" />
        <link rel="apple-touch-icon" href="/images/DP.png" />
        <link rel="icon" sizes="192x192" href="/images/DP.png" />
      </Head>

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
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#education">Education</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <main className="project-detail">
        <h2>Automated CVD Detection Using Deep Learning Segmentation of PLAX view Echocardiography & Multi-variable LSTM Analysis</h2>
        <p className="project-meta">Thesis (MSc Bioinformatics) • Universiti Malaya • 2023-2024</p>
        
        <div className="project-content">
          <Image 
            src="/images/SegEcho.png"
            alt="Echo" 
            width={500}
            height={500}
          />
          <h3>Overview</h3>
          <p>This project focused on developing an AI-assisted diagnostic tool for cardiovascular disease (CVD) using echocardiographic imaging. By utilising deep learning techniques, the tool segmented the heart&apos;s left ventricle from PLAX (Parasternal Long Axis) view echocardiography videos and analysed the motion and structural features using multivariable LSTM-based time-series classification. The objective was to improve the accuracy and efficiency of automated cardiac diagnostics, especially in clinical environments with limited expert availability.
              <br /><br />The approach combined medical image segmentation and temporal analysis of heart function to generate a predictive model for CVD classification, contributing to the broader aim of accessible and scalable cardiac screening.</p>
          
          <h3>Methodologies</h3>
          <ul>
            <li>DeepLabv3 were employed to accurately segment the left ventricle region from PLAX echocardiography frames.</li>
            <li>Motion-based cardiac features were extracted post-segmentation. These features were passed through deep learning model (i.e. LSTM) to detect abnormal cardiac patterns.</li>
            <li>A curated and preprocessed dataset of echocardiogram videos was used. Missing frames were interpolated to ensure consistent feature mapping.</li>
            <li>Performance was measured using metrics such as accuracy, precision, recall, and F1-score for classification.</li>
          </ul>
          <Image 
            src="/images/ThMethod.png" 
            alt="ThMethod" 
            width={600}
            height={360}
          />
          
          <h3>Tools Used</h3>
          <div className="tech-tags">
            <span className="tag">Python</span>
            <span className="tag">TensorFlow/Keras</span>
            <span className="tag">Pytorch</span>
            <span className="tag">DeepLabv3</span>
            <span className="tag">LSTM</span>
            <span className="tag">OpenCV</span>
            <span className="tag">FFmpeg</span>
            <span className="tag">Medical Imaging</span>
          </div>
          
          <h3>Results</h3>
          <p>Using 5-fold cross-validation, the model demonstrated strong performance in detecting Aortic Stenosis (AS), achieving an average precision, recall, F1-score, and accuracy of approximately 0.80. For Left Ventricular Hypertrophy (LVH) classification, performance was slightly lower, with both precision and accuracy averaging around 0.78.
              <br />These results highlight the model&apos;s effectiveness in identifying major cardiovascular abnormalities from echocardiographic motion features.</p>

          <div className="project-images">
            <Image 
              src="/images/ThAS.png" 
              alt="ThAS" 
              width={600}
              height={360}
            />
            <p>AS vs Control</p>
            <Image 
              src="/images/ThLVH.png" 
              alt="ThLVH" 
              width={600}
              height={360}
            />
            <p>LVH VS Control</p>
          </div>

          <h3>Limitations</h3>
          <ul>
            <li>No detailed quantitative analysis (e.g., Dice score, IoU) was conducted to evaluate segmentation performance.</li>
            <li>The LSTM classifier was only designed for binary classification (CVD vs. non-CVD). It does not distinguish between specific types or severities of cardiovascular conditions, which could limit its clinical utility in nuanced diagnoses.</li>
            <li>Certain advanced analyses such as SHAP (SHapley Additive exPlanations) for model interpretability were not performed. This reduced the project&apos;s ability to explore explainability aspects in depth.</li>
          </ul>

          <h3>Future Directions</h3>
          <ul>
            <li>Multimodal Integration: Combine echocardiography with ECG, blood biomarkers, or clinical metadata to enhance prediction accuracy.</li>
            <li>Explainable AI (XAI): Integrate model explainability techniques such as Grad-CAM or SHAP to increase clinical trust.</li>
            <li>Deployment: Develop a web-based interface or lightweight mobile application to deploy the tool for real-world clinical screening.</li>
            <li>Real-time Processing: Optimize the model for real-time video processing and integration into point-of-care ultrasound systems.</li>
          </ul>

          <Link href="/#projects" className="button back-button">← Back to Projects</Link>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Jia Hao Ng. All rights reserved.</p>
      </footer>
    </div>
  );
}