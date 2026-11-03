export default function ProjectVisual({ type }) {
  if (type === 'unesco') {
    return (
      <div className="visual visual-unesco">
        <div className="visual-top">
          <span>WIKIPEDIA PAGEVIEWS</span>
          <span>JAN 2026</span>
        </div>

        <div className="chart-bars">
          {[32, 48, 39, 67, 52, 78, 61, 91, 70, 57, 83, 100, 72, 88, 64, 95, 76, 58, 84, 69].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>

        <div className="visual-foot">
          <b>6 language editions</b>
          <span>UNESCO · Wikipedia</span>
        </div>
      </div>
    );
  }

  if (type === 'parks') {
    return (
      <div className="visual visual-map">
        <div className="map-grid" />
        <div className="map-label label-one">YOSEMITE</div>
        <div className="map-label label-two">ZION</div>
        <div className="map-label label-three">GRAND CANYON</div>
        <span className="map-pin pin-one" />
        <span className="map-pin pin-two" />
        <span className="map-pin pin-three" />
        <span className="map-pin pin-four" />
        <div className="map-caption">
          NATIONAL PARKS EXPLORER
          <small>VISITATION & ACCESSIBILITY</small>
        </div>
      </div>
    );
  }

  if (type === 'matching') {
    return (
      <div className="visual visual-matching">
        <div className="match-node node-a">Inside Airbnb</div>
        <div className="match-line line-a" />
        <div className="match-node node-b">Tourism Flanders</div>
        <div className="match-line line-b" />
        <div className="match-core">
          MATCH
          <br />& VALIDATE
        </div>
        <div className="match-out">Integrated tourism data</div>
      </div>
    );
  }

  return (
    <div className="visual visual-judge">
      <div className="game-window">
        <div className="game-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="game-title">THE JUDGE</div>
        <div className="game-cards">
          <span>♜</span>
          <span>♞</span>
          <span>♝</span>
          <span>♛</span>
        </div>
        <div className="game-status">
          MULTIPLAYER SESSION <b>● LIVE</b>
        </div>
      </div>
    </div>
  );
}