import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme/theme";
import { GlobalStyle } from "./styles/global/GlobalStyle";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header
          onSetTheme={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        />
        <About />
        <Works />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
