import { createGlobalStyle } from 'styled-components';
interface ThemeGlobalStyle {
    body: string;
    text: string;
}
export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${(theme: ThemeGlobalStyle) => theme.body};
    color: ${(theme: ThemeGlobalStyle) => theme.text};
    
  }`