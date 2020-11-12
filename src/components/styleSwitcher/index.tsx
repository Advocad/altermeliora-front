import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './globalStyle';

function StyleSwitche() {
    const [theme, setTheme] = useState('light');

    const handlerTheme = () => {
        switch (theme) {
        case 'dark':
            return setTheme('light')
        case 'light':
            return setTheme('grey')
        case 'grey':
            return setTheme('dark')
        }
    }

    return (
    <ThemeProvider theme={lightTheme}>
      <>
        
        <GlobalStyles/>
        <button onClick={handlerTheme}>Toggle theme</button>
      </>
    </ThemeProvider>
    )
}

export default StyleSwitche;