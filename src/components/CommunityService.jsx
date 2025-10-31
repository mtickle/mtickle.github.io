
function CommunityService() {
    return (
        <section id="community" className="card">
            <h2>Community Service</h2>
            <p className="experience-intro">
                My philosophy of service is a core part of my daily life, and I am
                deeply involved in my community at Wendell Baptist Church. I serve in
                several key roles that focus on mentorship, stewardship, and team
                collaboration.
            </p>

            {/* Deacon */}
            <div className="job">
                <div className="job-title">Deacon</div>
                <div className="job-company">Wendell Baptist Church</div>
                <div className="job-dates">Three-Year Term</div>
                <p>
                    As a Deacon, I am entrusted with the spiritual stewardship of
                    several families within our congregation. This is a role of pure
                    servanthood, where I provide support during key life events like
                    funerals and baptisms, visit homebound members, and act as a
                    dedicated point of contact for their spiritual and practical needs.
                </p>
                <strong className="job-subtitle">Core Areas of Service:</strong>
                <ul>
                    <li>Spiritual Stewardship & Family Support</li>
                    <li>Homebound & Member Visitation</li>
                    <li>Pastoral Support & Life Event Assistance</li>
                    <li>Church Representation at Local Events</li>
                </ul>
            </div>

            {/* Youth Team Leader */}
            <div className="job">
                <div className="job-title">Youth Team Leader</div>
                <div className="job-company">Wendell Baptist Church</div>
                <div className="job-dates">Ongoing Service</div>
                <p>
                    Serving as a Youth Team Leader, I mentor both middle school boys
                    and high school students weekly. My role involves leading small
                    group lessons, coordinating activities, helping manage classroom
                    order, and providing spiritual guidance to help create a
                    supportive and structured environment.
                </p>
                <strong className="job-subtitle">Core Areas of Service:</strong>
                <ul>
                    <li>Youth Mentorship & Spiritual Guidance</li>
                    <li>Small Group Leadership & Lesson Preparation</li>
                    <li>Activity Coordination & Classroom Management</li>
                </ul>
            </div>

            {/* Praise Team Member */}
            <div className="job">
                <div className="job-title">Praise Team Member & Musician</div>
                <div className="job-company">Wendell Baptist Church</div>
                <div className="job-dates">Ongoing Service</div>
                <p>
                    On the Praise Team, I play keyboards for weekly services and
                    rehearsals. My contribution extends beyond performing; I also
                    arrange music for the service, create and manage our chord sheets,
                    research new songs, manage audio equipment, and assist in mentoring
                    the youth band.
                </p>
                <strong className="job-subtitle">Core Areas of Service:</strong>
                <ul>
                    <li>Music Performance (Keyboards)</li>
                    <li>Music Arrangement & Song Curation</li>
                    <li>Technical Management (Chord Sheets & Audio Equipment)</li>
                    <li>Youth Band Mentorship</li>
                </ul>
            </div>
        </section>
    );
}

export default CommunityService;