import React from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons } from '@ionic/react';
import { ArrowLeft, Plus, Instagram } from 'lucide-react';
import CheckmarkIcon from './../../assets/Subtract.svg';
import './BusinessCardDetails.css';

const BusinessCardDetails: React.FC = () => (
  <IonPage className="business-card-page">
    <IonHeader className="ion-no-border">
      <div className="toolbar">
        <IonButtons slot="start">
          <div className="header-buttons">
            <ArrowLeft className="icon" />
            <span className="header-title">Business card details</span>
          </div>
        </IonButtons>
      </div>
    </IonHeader>

    <IonContent>
      <div className="content">
        <ProgressIndicators />
        <ProfileSection />
        <FormSection />
        <PreviewButton />
      </div>
    </IonContent>
  </IonPage>
);

const ProgressIndicators = () => (
  <div className="progress-indicators">
    {Array(4).fill(null).map((_, index) => (
      <div key={index} className={`progress-bar ${index === 0 ? 'active' : ''}`}></div>
    ))}
  </div>
);

const ProfileSection = () => (
  <div className="profile-section">
    <div className="profile-image-box">
    <img src={CheckmarkIcon} alt="Profile" className="hero-image-box" />
    </div>
  </div>
);

const FormSection = () => (
  <div className="form-section">
    {formFields.map((field, index) => (
      <FormField key={index} label={field.label} icon={field.icon}>
        {field.description}
      </FormField>
    ))}
    <KeywordsSection />
    <SocialMediaSection />
  </div>
);

const FormField: React.FC<{ label: string; icon: string; children: string }> = ({ label, icon, children }) => (
  <div className="form-field">
    <div className="form-header">
      <div className="form-label">
        <div className="icon">{icon}</div>
        <span>{label}</span>
      </div>
      <label className="toggle-switch">
        <input type="checkbox" className="sr-only" />
        <div className="switch"></div>
      </label>
    </div>
    <p className="form-description">{children}</p>
  </div>
);

const KeywordsSection = () => (
  <div className="keywords-section">
    <span className="section-title">Add keywords (optional)</span>
    <p className="description">Keep improving your profile visibility</p>
  </div>
);

const SocialMediaSection = () => (
  <div className="social-media-section">
    <span className="section-title">Add your social media accounts</span>
    <p className="description">You can add as many as you want</p>
    <div className="social-buttons">
      {socialButtons.map((ButtonComponent, index) => (
        <ButtonComponent key={index} />
      ))}
    </div>
  </div>
);

const PreviewButton = () => (
  <div className="preview-button-container">
    <button className="preview-button">Preview business card</button>
  </div>
);

const formFields = [
  { label: 'Phone number (optional)', icon: '📱', description: 'Make phone number visible to others' },
  { label: 'Business address (optional)', icon: '🏢', description: 'Make business address visible to others' },
  { label: 'Website link (optional)', icon: '🌐', description: 'Make website link visible to others' },
];

const socialButtons = [
  () => <button className="social-button"><Plus className="icon" /></button>,
  () => <button className="social-button"><Instagram className="icon" /></button>,
  () => (
    <button className="social-button">
      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.9 5.82s-.51.5 0 0A4.278 4.278 0 0116.6 5.82z" />
        <path d="M8.9 2.8L5.8 6.6 4.2 5c-.5-.5-1.3-.5-1.8 0-.5.5-.5 1.2 0 1.7l2.9 2.9c.2.2.5.3.7.3.2 0 .5-.1.7-.3l4.3-4.3c.4-.5.4-1.2 0-1.7-.5-.5-1.3-.5-1.8 0z" />
      </svg>
    </button>
  ),
];

export default BusinessCardDetails;
