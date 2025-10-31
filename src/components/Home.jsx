import profilePic from '../assets/galaxys_edge.jpeg'; // <-- Add your picture here

function Home() {
    return (
        <section id="about" className="card">
            <img
                src={profilePic}
                alt="Mike Tickle and family at Star Wars: Galaxy's Edge"
                className="profile-family-pic" // New class for wider image
            />
            <p className="image-caption">
                <strong>Achievement Unlocked!</strong> Caleb, Alison, Piper, Peyton, and myself exploring
                Star Wars: Galaxy's Edge in Disney's Hollywood Studios in our "Batuu Bounding" outfits.
            </p>

            <div className="home-layout">
                <div className="about-text">
                    <h2>About Me</h2>

                    <p>
                        With a software development career spanning since 1996, I've learned
                        that my real strength isn't just technology—it's my ability to make
                        connections. I’ve seen successes and failures, and through it all,
                        I've learned this: I speak code, but as a former military
                        journalist, I also speak human. I bridge the gap for non-techies,
                        lead with empathy, and solve complex problems, whether I'm the one
                        writing the code or the one guiding the team.
                    </p>
                    <p>
                        I have chosen to focus my career in public safety, passionately
                        supporting our front-line heroes. My goal is to turn any moment of
                        frustration into a positive experience that impresses every customer
                        with kindness and professionalism. This mission is at the heart of my
                        work as a Technical Team Lead at SAS, where I hold an active CJIS
                        Certification and maintain security clearances with eight government
                        agencies.
                    </p>
                    <p>
                        This philosophy of service and leadership extends beyond my 9-to-5. I
                        am deeply committed to my community, serving as a deacon and youth leader at
                        my church, where I also play keyboards on the praise team.
                        These roles are a core part of who I am, providing years of
                        practical experience in mentorship, team collaboration, and
                        community building.
                    </p>
                    <p>
                        At home in southeastern Wake County, I'm a husband and a dad to three
                        wonderful children (and a few pets). When I'm not at a dance
                        competition or gymnastics meet, you can find me writing and playing
                        music or exploring digital worlds in games like <em>No Man's Sky</em> and
                        the Forza Horizon series.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Home;