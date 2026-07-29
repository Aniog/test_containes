import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {Icon && <Icon size={24} />}
      </div>
      <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
      <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9375rem' }}>
        {description}
      </p>
      {features && features.length > 0 && (
        <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: '0.25rem' }}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;