
// 1. DEFINE YOUR TRACKS IN ONE, EASY-TO-MANAGE ARRAY
// This is your new "database" of music.
const tracks = [
  {
    embedSrc:
      'https://bandcamp.com/EmbeddedPlayer/track=2419945891/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
    bandcampUrl: 'https://miketickle.bandcamp.com/track/101-synthwave-demo-in-c',
    title: '101 - Synthwave Demo in C by Mike Tickle',
  },
  {
    embedSrc:
      'https://bandcamp.com/EmbeddedPlayer/track=2491299272/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
    bandcampUrl: 'https://miketickle.bandcamp.com/track/102-synthwave-demo-in-b',
    title: '102 - Synthwave Demo in B by Mike Tickle',
  },

];


function Music() {
  return (
    <section id="music" className="card">
      <h2>My Music</h2>
      <p className="experience-intro">
        In addition to my work in tech and at my church, I also enjoy
        writing and recording music. Here are a few tracks.
      </p>

      {/* 2. LOOP OVER THE 'tracks' ARRAY */}
      {/* This map() function creates an <iframe> for every object in the array */}
      {tracks.map((track) => (
        <div className="music-track" key={track.title}>
          <iframe
            // 3. The 'style' prop is now fixed, once, and for all!
            style={{ border: 0, width: '100%', height: '120px' }}
            src={track.embedSrc}
            seamless
          >
            {/* The data from your object populates the tags */}
            <a href={track.bandcampUrl}>{track.title}</a>
          </iframe>
        </div>
      ))}
    </section>
  );
}

export default Music;