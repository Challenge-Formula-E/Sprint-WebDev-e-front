import '../styles/coins.css'

function Coins() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="user-info">
          <div className="user-icon"></div>
          <h1>HELLO, STEVE!</h1>
          <button className="leave-button">leave</button>
        </div>
      </header>
      <div className="social-media">
        <div className="social-item">
          <span className="social-icon tiktok" src="../assets/tiktok.png"></span>
          <span className="social-email">tiktokuser@email123</span>
          <span className="social-posts">07 posts</span>
        </div>
        <div className="social-item">
          <span className="social-icon facebook"></span>
          <span className="social-email">Facebookuser@email.123</span>
          <span className="social-posts">01 posts</span>
        </div>
        <div className="social-item">
          <span className="social-icon instagram"></span>
          <span className="social-email">Instagramuser@email.123</span>
          <span className="social-posts">93 posts</span>
        </div>
      </div>
      <div className="stats">
        <div className="e-coins">
          <div className="coin-icon">E</div>
          <div className="coin-count">87</div>
          <p>Your E-coins</p>
        </div>
        <div className="current-rank">
          <div className="rank-icon">⭐️⭐️⭐️</div>
          <div className="rank-number">872</div>
          <p>Current Rank</p>
        </div>
      </div>
    </div>
  );
}

export default Coins;