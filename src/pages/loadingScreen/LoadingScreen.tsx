import React from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';
import './LoadingScreen.css';
import CheckmarkIcon from './../../assets/Subtract.svg';

const LoadingScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="loading-container">
          <div className="image-container">
            <img src={CheckmarkIcon} alt="Profile" className="profile-image" />
          </div>

          <div className="progress-bar">
            <div className="progress-bar-inner" />
          </div>

          <div className="text-container">
            <IonText color="medium">
              <p>We are creating your business card</p>
            </IonText>
            <IonText color="medium">
              <p>This won't take long</p>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LoadingScreen;
