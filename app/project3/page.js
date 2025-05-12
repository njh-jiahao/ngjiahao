import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
 
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true
}

export default function Project3() {
  return (
    <div className="container">
      <Head>
        <title>Palindromic Sequence Analysis | Jia Hao Ng</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
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
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#education">Education</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <main className="project-detail">
        <h2>Palindromic Sequence Analysis Web System</h2>
        <p className="project-meta">Python + Web System • Universiti Malaya • 2023-2024</p>
        
        <div className="project-content">
          <h3>Overview</h3>
          <p>This web-based application was designed to identify and analyze palindromic DNA sequences from user-provided nucleotide strings. Palindromic sequences are biologically significant as they play roles in gene regulation, restriction enzyme recognition, and genome stability. The system offers a user-friendly interface to support bioinformatics learning and research, particularly in sequence analysis.</p>
          
          <h3>System Components</h3>
          <div className="system-components">
            <div className="component">
              <h4>Palindrome Detection</h4>
              <p>Implemented efficient algorithms to scan DNA sequences for:</p>
              <ul>
                <li>Standard palindromes (immediate reverse complements)</li>
                <li>Spacer palindromes (reverse complements separated by configurable lengths)</li>
              </ul>
            </div>
            <div className="component">
              <h4>Input Handling and Validation</h4>
              <p>Robust input validation including:</p>
              <ul>
                <li>DNA sequence purity checks (ACGT characters only)</li>
                <li>FASTA file format verification</li>
                <li>Whitespace stripping</li>
              </ul>
            </div>
            <div className="component">
              <h4>Output Rendering</h4>
              <p>Results displayed in a structured, readable format with:</p>
              <ul>
                <li>Highlighted palindromic regions and their coordinates</li>
                <li>Detailed summary of palindrome types and counts</li>
                <li>Error messages for invalid or ambiguous inputs</li>
              </ul>
            </div>
            <div className="component">
              <h4>Modular Design and Extensibility</h4>
              <p>Designed with future scalability in mind, allowing for:</p>
              <ul>
                <li>Integration of additional sequence analysis tools</li>
                <li>Customizable search parameters (length, spacer size)</li>
                <li>Easy adaptation for educational or research use cases</li>
              </ul>
            </div>
          </div>
          
          <h3>Key Features</h3>
          <ul>
            <li>Identifies both standard palindromes and spacer palindromes (with intervening sequences).</li>
            <li>Configurable minimum palindrome length and maximum spacer length.</li>
            <li>Supports both manual sequence entry and FASTA file upload.</li>
            <li>Ensures clean and biologically meaningful input before analysis.</li>
            <li>Comprehensive results presentation with positional information.</li>
            <li>Persistent query history for result retrieval.</li>
            <li>Minimal setup required; easily adaptable for educational environments or small-scale bioinformatics projects.</li>
          </ul>
          
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            <span className="tag">Python</span>
            <span className="tag">CGI</span>
            <span className="tag">HTML/CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">Linux</span>
            <span className="tag">Apache HTTP Server</span>
          </div>
          
          <h3>Technical Implementation</h3>
          <div className="implementation-details">
            <div className="detail-item">
              <h4>Front-End Interface</h4>
              <p>Simple and intuitive web interface using HTML, featuring:</p>
              <ul>
                <li>Text area for DNA sequence input</li>
                <li>Real-time input validation via JavaScript</li>
                <li>Submit/reset buttons for seamless user interaction</li>
              </ul>
            </div>
            <div className="detail-item">
              <h4>Back-End Logic</h4>
              <p>Powered by Python scripts (CGI or Flask) responsible for:</p>
              <ul>
                <li>Parsing and cleaning user-submitted DNA data</li>
                <li>Running palindrome detection algorithms</li>
                <li>Generating structured output for the results page</li>
              </ul>
            </div>
            <div className="detail-item">
              <h4>Result Display Page</h4>
              <p>Results are dynamically rendered with:</p>
              <ul>
                <li>List of detected palindromic sequences</li>
                <li>Start and end positions in the original input</li>
                <li>Optional biological annotations or interpretations</li>
              </ul>
            </div>
            <div className="detail-item">
              <h4>Error Handling Module</h4>
              <p>Graceful handling of invalid or malformed inputs through:</p>
              <ul>
                <li>Clear error messages for non-DNA characters</li>
                <li>Feedback for empty fields or incorrect formats</li>
                <li>Safe fallback behavior to prevent system crashes</li>
              </ul>
            </div>
            <div className="detail-item">
              <h4>Query Tracking and Session Management</h4>
              <p>Each user submission is assigned a unique query number, enabling:</p>
              <ul>
                <li>Randomized query ID generation using random module</li>
                <li>Server-side storage of user queries and results for future retrieval</li>
                <li>Query lookup feature allowing users to revisit and view past results</li>
              </ul>
            </div>
          </div>
          
          <div className="project-images">
            <Image src="/images/Querypage.png" alt="Query interface" width={600} height={400} />
            <Image src="/images/Resultspage.png" alt="Result interface" width={600} height={400} />
            <Image src="/images/HistoryQuery.png" alt="HistoryQuery interface" width={600} height={400} />
            <Image src="/images/HistoryResult.png" alt="HistoryResult interface" width={600} height={400} />
            <Image src="/images/QueryFormatError.png" alt="Format error interface" width={600} height={400} />
          </div>

          <h3>Group member</h3>
          <p>Wu Zehua<br />Sun Weijie<br />Irfan Ahmed</p>
          
          <Link href="/#projects" className="button back-button">← Back to Projects</Link>
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Jia Hao Ng. All rights reserved.</p>
      </footer>
    </div>
  );
}