import './App.css';
import MyComponent from './component/MyComponent';
function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className="flex-1">
        <MyComponent/>
      </div>
      <footer style={{ textAlign: 'center', padding: '1rem', fontSize: '0.85rem', color: '#3E5164', backgroundColor: 'rgba(220, 227, 234, 0.7)', borderTop: '1px solid #BCC7D2', marginTop: '2rem' }}>
        <p>Geliştirici: <a href="https://www.yucelgumus.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#AB421C', textDecoration: 'underline', fontWeight: 600 }}>Yücel Gümüş</a></p>
      </footer>
    </div>
  );
}
export default App;