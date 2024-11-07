import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import CheckmarkIcon from './../../assets/Subtract.svg';
import ProfileButtonIcon from './../../assets/button-blue.svg';
import './SuccessScreen.css';

const SuccessScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="success-container">
          <div className="icon-container">
            <img src={CheckmarkIcon} alt="checkmark" className="checkmark-icon" />
          </div>
          <h1>Success!</h1>
          <p>Your business card was created successfully</p>
          <button className="profile-button">
            <img src={ProfileButtonIcon} alt="profile button" className="button-icon" />
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SuccessScreen;