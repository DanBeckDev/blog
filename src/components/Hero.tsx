import { ThemeContext } from '@context/*';
import { useContext } from 'react';

export function Hero() {
  const {
    theme: {
      layout: { spacing, breakpoints },
    },
  } = useContext(ThemeContext);
  return (
    <>
      <div className="hero">
        <div className="container">
          <h2>Hi I’m Dan. Welcome to my coding adventure.</h2>
        </div>
      </div>
      <style jsx>{`
        .hero {
          height: 60rem;
          width: 100vw;
          display: flex;
          background: url('/images/hero.webp');
          background-size: cover;
        }

        .container {
          width: 33.6rem;
          margin: auto ${spacing.mobile.small};
          padding: 1.5rem;
          background: white;
          border-radius: 2rem;
          opacity: 0.95;
        }

        h2 {
          margin: auto;
          font-family: 'Roboto Condensed';
          font-weight: bold;
          font-size: 4.2rem;
        }

        @media (min-width: ${breakpoints.tablet.min}) {
          .hero {
            height: 76.6rem;
            display: flex;
            background: url('/images/hero.webp');
            background-size: cover;
          }

          .container {
            width: 62.9rem;
            margin: auto;
            padding: 4rem;
          }

          h2 {
            text-align: center;
            font-size: 8rem;
          }
        }
        @media (min-width: ${breakpoints.desktop.min}) {
          .hero {
            height: 62.1rem;
            display: flex;
            background: url('/images/hero.webp');
            background-size: cover;
            background-position: 0% 45%;
          }
        }
      `}</style>
    </>
  );
}
