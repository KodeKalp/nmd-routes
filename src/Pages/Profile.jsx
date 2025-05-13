import './../App.css';
import ProfileCard from '../Components/ProfileCard';

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Team Members
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      <ProfileCard 
      imgURL="https://dummyimage.com/600x400/000/fff" 
      name="Riya" 
      title="Makeup Artist" 
      desc="Professional Makeup artist in Gondia"/>

      <ProfileCard 
      imgURL="https://dummyimage.com/600x400/d94ed9/fff" 
      name="Twinkal" 
      title="Little Star" 
      desc="Professional Start artist in Gondia"/>

      <ProfileCard imgURL="https://dummyimage.com/600x400/37e680/fff" 
      name="Mushkan" 
      title="Singer" 
      desc="Professional Singer artist in Bhalaghat"/>

      </div>
    </div>
  );
}

export default Profile;
