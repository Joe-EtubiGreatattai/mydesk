import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonText,
  IonIcon
} from '@ionic/react';
import {
  callOutline,
  mailOutline,
  locationOutline,
  globeOutline,
  logoInstagram,
  logoTiktok,
  logoFacebook,
  logoLinkedin,
  logoTwitter
} from 'ionicons/icons';
import './BusinessCardProfile.css';
import ProfileButtonIcon from './../../assets/button-blue.svg';
import Hero from './../../assets/hero-image.png';
import BackIcon from './../../assets/back.svg';
import EditIcon from './../../assets/edit icon.svg';


const BusinessCardProfile: React.FC = () => {
  return (
    <IonPage color='white'>
      <div className="top-navigation">
        <div className="back-icon-container">
          <img src={BackIcon} alt="profile button" className="back-icon" />
        </div>
        <div className="page-title">Preview Business Card</div>
      </div>

      <div className="progress-indicators">
        <div className="indicator">
          Connect socials
          <div className="border-line"></div>
        </div>
        <div className="indicator">
          Add video or photo
          <div className="border-line"></div>
        </div>
        <div className="indicator">
          Business card details
          <div className="border-line"></div>
        </div>
        <div className="indicator active">
          Preview business card
          <div className="border-line"></div>
        </div>
      </div>

      <IonContent>
        {/* Hero Image Section */}
        <div className="hero-section">
          <img
            src={Hero}
            alt="Profile"
            className="hero-image"
          />
          <div className="logo-container">
            <div className="logo-circle"></div>
            <span className="logo-text">Logoipsum</span>
          </div>
        </div>

        <div className="profile-container">
          <h2>Cartwright-Morissette</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Facilisis ut malesuada suspendisse neque et sed vitae.</p>

          <div className="contact-info">
            <div className="contact-item">
              <IonIcon icon={callOutline} />
              <span>1-845-653-4159</span>
            </div>
            <div className="contact-item">
              <IonIcon icon={mailOutline} />
              <span>Tony_Francis@yahoo.com</span>
            </div>
            <div className="contact-item">
              <IonIcon icon={locationOutline} />
              <span>465 Stanford Circle, Port Hudson 12466</span>
            </div>
            <div className="contact-item">
              <IonIcon icon={globeOutline} />
              <span>https://secretive-grave.biz</span>
            </div>
          </div>
          <img src={ProfileButtonIcon} alt="profile button" className="socials-icon-svg" />

          <div className="social-stats">
            <div>
              <div>0</div>
              <small>Following</small>
            </div>
            <div>
              <div>0</div>
              <small>Followers</small>
            </div>
            <div>
              <div>0</div>
              <small>Cards</small>
            </div>
            <div>
              <div>0</div>
              <small>Shared</small>
            </div>
          </div>

          <div className="socials-section">
            <h3>Socials</h3>
            <p>Click to that social account</p>
            <div className="social-icons">
              <IonIcon icon={logoInstagram} size="large" />
              <IonIcon icon={logoTiktok} size="large" />
              <IonIcon icon={logoFacebook} size="large" />
              <IonIcon icon={logoLinkedin} size="large" />
              <IonIcon icon={logoTwitter} size="large" />
            </div>
          </div>

          <div className="media-section">
            <h3>Media</h3>
            <div className="media-grid">
              {[...Array(15)].map((_, index) => (
                <div key={index} className="media-item">
                  <img src={`/path/to/food-image-${index + 1}.jpg`} alt={`Food ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="quick-actions">
            <h3>Quick actions</h3>
            <div className="action-items">
              {[
                'Change content or layout',
                'Add more or remove socials',
                'Edit business details'
              ].map((action, index) => (
                <div key={index} className="action-item">
                  <div>
                    <img src={EditIcon} alt="profile button" className="edit-icon" />
                    <span>{action}</span>
                  </div>
                  <span>›</span>
                </div>
              ))}
            </div>
          </div>

          <img src={ProfileButtonIcon} alt="profile button" className="create-button" />

        </div>
      </IonContent>
    </IonPage>
  );
};

export default BusinessCardProfile;