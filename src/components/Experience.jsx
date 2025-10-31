
function Experience() {
    return (
        <section id="experience" className="card">
            <h2>Professional Experience</h2>
            <p className="experience-intro">
                Below are the stories from my "big three" career chapters. For a
                complete, detailed work history, please visit my LinkedIn profile.
            </p>

            {/* SAS */}
            <div className="job">
                <div className="job-title">Technical Team Lead</div>
                <div className="job-company">SAS</div>
                <div className="job-dates">Jan 2017 - Present</div>
                <p>
                    As a Technical Team Lead, I serve as a trusted primary technical
                    liaison for key external customers, acting as their dedicated
                    internal advocate with technical support and sales to ensure
                    successful outcomes. I lead the end-to-end resolution of complex,
                    high-priority customer issues, from initial diagnosis through final
                    implementation. A core part of my role involves mentoring and
                    developing junior team members, fostering a culture of continuous
                    learning and identifying strategic cross-training opportunities. I
                    hold an active CJIS Certification and maintain security clearances
                    with eight distinct government agencies.
                </p>
                <strong className="job-subtitle">Core Areas of Specialization:</strong>
                <ul>
                    <li>Public Safety & Student Safety Programs</li>
                    <li>Data Analytics & Regional Information Sharing Systems (RISS)</li>
                    <li>FBI eGuardian Integrations</li>
                    <li>Suspicious Activity Report (SAR) Submission and Processing</li>
                    <li>Technical Leadership & Mentorship</li>
                </ul>
            </div>

            {/* JAGGAER */}
            <div className="job">
                <div className="job-title">Manager, Product Development</div>
                <div className="job-company">JAGGAER</div>
                <div className="job-dates">May 2012 - Dec 2016 (4 yrs 8 mos)</div>
                <p>
                    My four-and-a-half-year tenure at JAGGAER was a story of rapid
                    advancement. I began as a Sr. Developer diagnosing customer-facing
                    defects and quickly progressed to a Product Owner, first for
                    Production Support and then for a core spend-analysis product. I
                    concluded my time there as a Manager of Product Development, where I
                    led a 20+ person team, integrated near-shore developers from
                    Bolivia, and successfully spearheaded four major software releases
                    with zero defects on launch day.
                </p>
                <strong className="job-subtitle">Core Areas of Specialization:</strong>
                <ul>
                    <li>Agile Product Ownership & Backlog Management</li>
                    <li>Team Leadership & Career Development</li>
                    <li>Production Support & Defect Triage</li>
                    <li>Global Team Integration (Near-shore)</li>
                    <li>.NET & Spend Analysis Applications</li>
                </ul>
            </div>

            {/* Syneos Health */}
            <div className="job">
                <div className="job-title">Manager, Applications Development</div>
                <div className="job-company">Syneos Health (formerly INC Research)</div>
                <div className="job-dates">Mar 2003 - Oct 2010 (7 yrs 8 mos)</div>
                <p>
                    As a foundational member of a four-person IT team, I grew with the
                    company for over seven years. I personally architected, built, and
                    launched its flagship Clinical Trials Management System (CTMS) from
                    the ground up, serving as the sole developer and system manager for
                    200+ global users. As the company expanded, I advanced to Manager,
                    Applications Development, where I directed a seven-person team,
                    partnered with business leaders on strategy, and ensured all
                    applications met strict Computer Systems Validation (CSV)
                    requirements for the clinical trials industry.
                </p>
                <strong className="job-subtitle">Core Areas of Specialization:</strong>
                <ul>
                    <li>Full-Lifecycle Application Development (ASP.NET & SQL Server)</li>
                    <li>Clinical Trials Management Systems (CTMS)</li>
                    <li>Computer Systems Validation (CSV) & Regulatory Compliance</li>
                    <li>System Architecture & Database Design</li>
                    <li>Global User Support & Team Management</li>
                </ul>
            </div>

            {/* LinkedIn Call-to-Action */}
            <div className="linkedin-cta">
                <p>
                    For a complete, chronological list of my work history, including
                    earlier roles, please visit my full profile on LinkedIn.
                </p>
                <a
                    href="https://www.linkedin.com/in/your-profile-url" // <-- Add your LinkedIn URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-button"
                >
                    View Full LinkedIn Profile
                </a>
            </div>
        </section>
    );
}

export default Experience;