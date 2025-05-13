import React from 'react';

function KcmBlogFeed() {
  return (
    <section className="pv-kcm-blog">
      <h3>Latest Market Insights</h3>
      <div className="pv-kcm-iframe-container">
        <iframe
          src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18"
          title="KCM Real Estate Blog"
          scrolling="yes"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          height="800"
          width="100%"
          allowFullScreen
          style={{
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            background: '#fff',
            minWidth: 0,
            width: '100%',
            maxWidth: '100%',
            border: '1px solid #e5e7eb'
          }}
        ></iframe>
      </div>
    </section>
  );
}

export default KcmBlogFeed; 