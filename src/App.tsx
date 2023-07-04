import { ChakraProvider } from '@chakra-ui/react';
import { Router } from './Routes/Router';
import theme from './styles/theme';
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

function App() {
  return (
    <div className="App">
        <ChakraProvider resetCSS theme={theme}>
      <h1> Hello, World!</h1>
      <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
