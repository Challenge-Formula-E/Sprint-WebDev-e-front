import '../styles/coins.css'
import user from "../assets/user.png"

function Coins() {
  return (
    <div className="profile-container">
      <div className='back-profile'>
        <header className="profile-header">
          <div className='user-info'>
            <div className="user-icon" style={{backgroundImage: `url(${user})`}}></div>
            <h1 className='user-name'>HELLO, STEVE!</h1>
          </div>
            <button className="leave-button">leave</button>
          
        </header>


        <div className="social-media">


          <div className="social-item">
            <div className='social-plataform'>
              <span className="social-icon tiktok" src="../assets/tiktok.png"></span>
              <div className='conect'>
                <span className="social-email">tiktokuser@email123</span>
                <p className='social-connected'>CONNECTED</p>
              </div>
            </div>

            <span className="social-posts">07 posts</span>
          </div>


          <div className="social-item">
            <div className='social-plataform'>
              <span className="social-icon facebook"></span>
              <div className='conect'>
                <span className="social-email">Facebookuser@email.123</span>
                <p className='social-connected'>CONNECTED</p>
              </div>
            </div>
            <span className="social-posts">01 posts</span>
          </div>


          <div className="social-item">
            <div className='social-plataform'>
              <span className="social-icon instagram"></span>
              <div className='conect'>
                <span className="social-email">Instagramuser@email.123</span>
                <p className='social-connected'>CONNECTED</p>
              </div>
            </div>
            <span className="social-posts">13 posts</span>
          </div>


          <div className="social-item">
            <div className='social-plataform'>
              <span className="social-icon twitter"></span>
              <div className='conect'>
                <span className="social-email">Twitteruser@email.123</span>
                <p className='social-connected'>CONNECTED</p>
              </div>
            </div>
            <span className="social-posts">13 posts</span>
          </div>

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