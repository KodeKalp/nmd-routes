import React from 'react'

const HomePage = () => {

   return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Personal Profile</h1>
      <p style={styles.subtitle}>Your one-stop place to showcase your skills, experience, and more!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#666',
    marginTop: '10px',
  },
};
export default HomePage
