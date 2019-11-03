import React from 'react';
import MagicSkool from './pages/magicSkool';
import Theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <MagicSkool />
      </div>
    </ThemeProvider>
  );
}

export default App;
