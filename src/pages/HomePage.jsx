function HomePage() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '3rem', fontFamily: 'serif', marginBottom: '1rem'}}>VELMORA</h1>
        <p style={{marginBottom: '2rem'}}>Welcome to Velmora Fine Jewelry</p>
        <a href="/shop" style={{backgroundColor: '#B8956A', color: 'white', padding: '1rem 2rem', textDecoration: 'none'}}>
          Shop Collection
        </a>
      </div>
    </div>
  )
}

export default HomePage
