import { ThemeContext } from '@context/*';
import Head from 'next/head';
import { useContext } from 'react';

import Navigation from './Navigation';

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  const {
    theme: {
      layout: { spacing, breakpoints },
    },
  } = useContext(ThemeContext);

  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            box-sizing: border-box;
            height: 100%;
          }

          nav {
            padding: 1.5rem ${spacing.mobile.small};
          }

          @media (min-width: ${breakpoints.tablet.min}) {
            nav {
              padding: 2.9rem ${spacing.tablet.small};
            }
          }
          @media (min-width: ${breakpoints.desktop.min}) {
            nav {
              padding: 4rem ${spacing.desktop.small};
            }
          }
        `}
      </style>
    </div>
  );
}
