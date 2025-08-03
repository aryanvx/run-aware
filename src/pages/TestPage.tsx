const TestPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '1rem' }}>
          RunnerMetrics App
        </h1>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>
          Basic test - if you see this, React is working!
        </p>
        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '8px',
          display: 'inline-block'
        }}>
          GitHub Pages Deployment Test
        </div>
      </div>
    </div>
  );
};

export default TestPage;