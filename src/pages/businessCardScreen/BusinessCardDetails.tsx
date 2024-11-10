import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons } from '@ionic/react';
import { ArrowLeft, Plus, Instagram } from 'lucide-react';
import Hero from './../../assets/hero-image.png';

import ProfileButtonIcon from './../../assets/button-blue.svg';
import './BusinessCardDetails.css';

interface FormField {
  label: string;
  icon: string;
  description: string;
}

const BusinessCardDetails: React.FC = () => {
  const [bio, setBio] = useState('');
  const [formVisibility, setFormVisibility] = useState<Record<string, boolean>>({});

  return (
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
          <FormSection 
            bio={bio} 
            setBio={setBio}
            formVisibility={formVisibility}
            setFormVisibility={setFormVisibility}
          />
          <PreviewButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

const ProgressIndicators: React.FC = () => (
  <div className="progress-indicators">
    {['Connect socials', 'Add video or photo', 'Business card details', 'Preview business card'].map((text, index) => (
      <div key={index} className={`indicator ${index === 3 ? 'active' : ''}`}>
        {text}
        <div className="border-line" />
      </div>
    ))}
  </div>
);

const ProfileSection: React.FC = () => (
  <div className="profile-section">
    <div className="profile-image-box">
      <img src={Hero} alt="Profile" className="hero-image-box" />
    </div>
  </div>
);

interface FormSectionProps {
  bio: string;
  setBio: (value: string) => void;
  formVisibility: Record<string, boolean>;
  setFormVisibility: (value: Record<string, boolean>) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ 
  bio, 
  setBio, 
  formVisibility, 
  setFormVisibility 
}) => (
  <div className="form-section">
    <textarea 
      placeholder="Write your bio here"
      value={bio}
      onChange={(e) => setBio(e.target.value)}
    />
    {formFields.map((field, index) => (
      <FormField 
        key={index} 
        field={field}
        isVisible={formVisibility[field.label] || false}
        onToggle={() => {
          setFormVisibility({
            ...formVisibility,
            [field.label]: !formVisibility[field.label]
          });
        }}
      />
    ))}
    <KeywordsSection />
    <SocialMediaSection />
  </div>
);

interface FormFieldProps {
  field: FormField;
  isVisible: boolean;
  onToggle: () => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, isVisible, onToggle }) => (
  <div className="form-field">
    <div className="form-header">
      <div className="form-label">
        <span className="icon">{field.icon}</span>
        <span>{field.label}</span>
      </div>
    </div>
    <div className="input-container">
      <input 
        placeholder={field.description}
        className="form-input"
      />
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          className="sr-only" 
          checked={isVisible}
          onChange={onToggle}
        />
        <div className="switch" />
      </label>
    </div>
  </div>
);

const KeywordsSection: React.FC = () => (
  <div className="keywords-section">
    <span className="section-title">Add keywords (optional)</span>
    <input 
      placeholder='Keep improving your profile visibility'
      className="form-input"
    />
  </div>
);

const SocialMediaSection: React.FC = () => (
  <div className="social-media-section">
    <span className="section-title">Add your social media accounts</span>
    <input 
      placeholder='You can add as many as you want'
      className="form-input"
    />
    
    <div className="social-buttons">
      <button className="social-button">
        <Plus className="icon" />
      </button>
      <button className="social-button">
        <Instagram className="icon" />
      </button>
    </div>
  </div>
);

const PreviewButton: React.FC = () => (
  <div className="preview-button-container">
    <img src={ProfileButtonIcon} alt="profile button" className="create-button" />
  </div>
);

const formFields: FormField[] = [
  { 
    label: 'Phone number (optional)', 
    icon: '📱', 
    description: 'Enter your phone number' 
  },
  { 
    label: 'Business address (optional)', 
    icon: '🏢', 
    description: 'Enter your business address' 
  },
  { 
    label: 'Website link (optional)', 
    icon: '🌐', 
    description: 'Enter your website URL' 
  },
];

export default BusinessCardDetails;