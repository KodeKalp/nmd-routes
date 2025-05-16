import React from 'react'

const ProfileCard = ({imgURL="https://dummyimage.com/600x400/000/fff" , name="", title, desc}) => {

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '300px',
        margin: '0 auto',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      };
    
      const imageStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        margin: '0 auto 15px auto',
        display: 'block'
      };
  return (
    <div style={cardStyle}>
      <img src={imgURL} style={imageStyle}/>
      <h2 style={{ margin: '10px 0' }}>{name}</h2>
      <h3 style={{ color: '#666', margin: '5px 0', fontWeight: 'normal' }}>{title}</h3>
      <p style={{ margin: '15px 0' }}>
        {desc}
      </p>
    </div>
  )
}

export default ProfileCard
