import Content from './Content'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import './App.css'
function App() {
  const themeContext=useContext(ThemeContext)
  return (

    <div style={{padding:'20px'}}>
      <button onClick={themeContext.toggleTheme}>Toggle theme</button>
      <Content/>
    </div>

  );
}

export default App;
