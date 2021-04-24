import './App.css';
import Lista from './components/Lista/Lista';
import Film from './components/Film/Film';

function App() {
  return (
    <div className="App">
      <h1>React komponente</h1>
      <h3>(domaći zadatak za Amplitudovu web akademiju)</h3>
      <Lista>
        <Film />
        <Film />
        <Film />
      </Lista>
    </div>
  );
}

export default App;
