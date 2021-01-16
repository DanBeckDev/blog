import { createContext, PropsWithChildren, ReactElement } from 'react';
import css from 'styled-jsx/css';

const sharedAlternativeStyles = css.resolve`
  font-family: 'Roboto';
  letter-spacing: 0.17rem;
`;

const sharedHeadingStyles = css.resolve`
  font-family: 'Roboto Condensed';
  font-weight: bold;
  letter-spacing: -0.17rem;
`;

const x = css``;

const themeConfig = {
  theme: {
    layout: {
      breakpoints: {
        mobile: {
          max: '414px',
        },
        tablet: {
          max: '1024px',
          min: '415px',
        },
        desktop: {
          min: '1025px',
        },
      },
      spacing: {
        mobile: {
          small: '2.4rem',
          large: '4.5rem',
        },
        tablet: {
          small: '11.3rem',
          large: '19.9rem',
        },
        desktop: {
          small: '19.9rem',
          large: '37.8rem',
        },
      },
    },
    styles: {
      h1: `
        font-size: 4.883rem;
        ${console.log(sharedHeadingStyles)}
      `,
      h2: `
        font-size: 3.906rem;
        ${sharedHeadingStyles}
      `,
      h3: `
        font-size: 3.125rem;
        ${sharedHeadingStyles}
      `,
      h4: `
        font-size: 2.5rem;
        ${sharedHeadingStyles}
      `,
      h5: `
        font-size: 2rem;
        ${sharedHeadingStyles}
      `,
      p: `
        font-family: 'Roboto Condensed';
        font-size: 2rem;
      `,
      helper: `
        font-family: 'Roboto';
        font-size: 1.28rem;
      `,
      subtitle: `
        font-size: 3.125rem;
        ${sharedAlternativeStyles}
      `,
      subtitleSmall: `
        font-size: 2.5rem;
        ${sharedAlternativeStyles}
      `,
      button: `
        font-size: 3.125rem;
        font-weight: bold;
        ${sharedAlternativeStyles}
      `,
    },
  },
};

export const ThemeContext = createContext(null);

export function ThemeProvider({
  children,
}: PropsWithChildren<{}>): ReactElement {
  return (
    <ThemeContext.Provider value={themeConfig}>
      {children}
    </ThemeContext.Provider>
  );
}
