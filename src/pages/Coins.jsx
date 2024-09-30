import '../styles/coins.css'
import user from "../assets/user.png"
import "../assets/fundomoedas.png"
import moeda from '../assets/moeda.png'
import impressions from '../assets/impressions.png'
import Carroselboxes from '../componentes/Carroselboxes'
import { useUser } from '../hooks/useUser'

function Coins() {
  const { logOut } = useUser();

  return (
    <div className="profile-container">
      <div className='back-profile'>
        <header className="profile-header">
          <div className='user-info'>
            <div className="user-icon" style={{backgroundImage: `url(${user})`}}></div>
            <h1 className='user-name'>HELLO, STEVE!</h1>
          </div>
            <button onClick={logOut} className="leave-button">leave</button>
          
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
          {/* Box E-coins */}
          <div className="e-coins">
            <img className="coin-icon" src={moeda} alt='E-COINS'/>
            <div className="coin-text">
              <div className="coin-count">87</div>
              <p>Your E-coins</p>
              <p className='sub2'>Share posts to earn more E-coins</p>
            </div>
          </div>

          {/* Box Rank */}
          <div className="current-rank">
            <div className="rank-text">
              <div className="rank-number">E-Eco</div>
              <p>Current Rank</p>
              <p className='sub2'>128 interactions left for you to earn 13 E-coins</p>
            </div>
            <img className="rank-icon" src={impressions} alt='IMPRESSOINS'/>
          </div>
        </div>



        <div className="e-coins-container">
            <h1 className="title">What are E-coins?</h1>
            <div className="image-placeholder">
                
               {/* <img src="../assets/fundomoedas.png" />*/}
            </div>
            <h2 className="exchange-title">Exchange your E-coins for one of the prizes in your rank</h2>
            <p className="description">
                E-coins are virtual currencies accumulated by users based on the number of views their published videos receive. 
                Each view contributes to the content creator&apos;s E-coin balance, encouraging the production and sharing of popular 
                videos about Formula E. These coins can be exchanged for prizes, offering a tangible reward for the engagement 
                and success of the videos. The E-coin system not only motivates users to create quality content but also 
                promotes a more active and engaged community on the platform.
            </p>
        </div>
        <p className='about'>Check here the prizes according to each rank</p>
      <Carroselboxes></Carroselboxes>
    </div>
  );
}

export default Coins;