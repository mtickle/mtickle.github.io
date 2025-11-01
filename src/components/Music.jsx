
function Music() {
    return (
        <section id="music" className="card">
            <h2>My Music</h2>
            <p className="experience-intro">
                In addition to my work in tech and at my church, I also enjoy
                writing and recording music. Here are a few tracks.
            </p>

            {/* --- Bandcamp Embed --- */}
            <div className="music-track">
                {/* Here is your iframe. Notice the 'style' prop:
          - It has double curly braces: style={{ ... }}
          - The properties are 'camelCased' (though not needed here)
          - The values (except numbers) are in quotes: '100%', '120px'
        */}
                <iframe
                    style={{ border: 0, width: '100%', height: '120px' }}
                    src="https://bandcamp.com/EmbeddedPlayer/track=2419945891/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless
                >
                    <a href="https://miketickle.bandcamp.com/track/101-synthwave-demo-in-c">
                        101 - Synthwave Demo in C by Mike Tickle
                    </a>
                </iframe>
            </div>

            {/* To add your 100 other tracks, just copy the <iframe>
        (with its fixed style) and paste it below.
      */}
            {/*
      <div className="music-track">
        <iframe
          style={{ border: 0, width: '100%', height: '120px' }}
          src="... (link to your next song) ..."
          seamless
        >
          <a href="...">... (link to your next song) ...</a>
        </iframe>
      </div>
      */}

        </section>
    );
}

export default Music;