function App() {
  return (
    <div style={{ padding: '20px', margin: '20px', border: '3px solid red' }}>
      <h1 style={{ fontSize: '32px', color: 'black' }}>MINIMAL TEST</h1>
      <p>If you see this, React is working!</p>
      <button onClick={() => alert('Click works!')}>Test Button</button>
    </div>
  );
}

export default App;
