import { ThemeContext } from '@context/*';
import { useContext } from 'react';
import { Heading, Subtitle, Button } from '@components/*';
export function Bio() {
  const {
    theme: {
      styles,
      layout: { spacing, breakpoints },
    },
  } = useContext(ThemeContext);
  return (
    <>
      <section>
        <article>
          <header>
            <img alt="avatar" src="images/avatar.png"></img>
            <Heading level={2}>About Me</Heading>
          </header>
          <article>
            <Subtitle>
              I’m a passionate front-end software engineer with a love for
              everything agile.
            </Subtitle>
            <Button>Learn more</Button>
          </article>
        </article>
      </section>

      <style jsx>
        {`
        section {
            text-align: center;
            padding: 5rem ${spacing.mobile.large};
        }

        img {
            display: block;
            height: 9.1rem;
            margin 0 auto;
        }

        @media (min-width: ${breakpoints.tablet.min}) {
            section {
            padding: 5rem 0;
        }

            article > article {
            padding: 0 ${spacing.tablet.large};
        }
          }
          @media (min-width: ${breakpoints.desktop.min}) {
            section {
            padding: 5rem 0;
        }

            article > article {
            padding: 0 ${spacing.desktop.large};
        }
          }
      `}
      </style>
    </>
  );
}
