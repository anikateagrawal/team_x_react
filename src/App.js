
import './App.css';
import Props from './components/Props';

function App() {
  return (
    <div >
      <p>This is React app.</p>
      <Props name="john doe" age="26">
          <h1>ABCD</h1>
          <h2>sdnvjdvn</h2>
      </Props>
      <Props name="abds doe" age="21"/>
      <Props name="john" age="20"/>
    </div>
  );
}

export default App;
