import { ThemeContext } from '@context/*';
import { useContext } from 'react';

export function Subtitle({ children }) {
  const {
    theme: { styles },
  } = useContext(ThemeContext);
  return (
    <>
      <p>{children}</p>
      <style jsx>
        {`
          p {
            ${styles.subtitle}
            margin: 2rem 0;
          }
        `}
      </style>
    </>
  );
}
