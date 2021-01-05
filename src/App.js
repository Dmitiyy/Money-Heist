import "./App.sass";
import { Provider } from "react-redux";
import store from "./store";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Header from "./components/Header/";
import Plot from "./components/Plot/";
import Best from "./components/Best/";
import Photos from "./components/Photos/";
import Actors from './components/Actors/';
import Footer from "./components/Footer/";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Compact-bol'
    },
    h2: {
      fontFamily: 'Compact-reg'
    }
  }
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <Header />
        <Plot />
        <Best />
        <Photos />
        <Actors />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;