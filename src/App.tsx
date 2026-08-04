import MyComponent from './component/MyComponent';
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="flex-1">
        <MyComponent/>
      </div>
      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.85rem', color: '#666', borderTop: '1px solid rgba(0,0,0,0.1)', marginTop: '2rem' }}>
        <p>Geliştirici: <a href="https://www.yucelgumus.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: 600 }}>Yücel Gümüş</a></p>
      </footer>
    </div>
  );
}
export default App;