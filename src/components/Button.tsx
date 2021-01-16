import { ThemeContext } from '@context/*';
import { useContext } from 'react';

export function Button({ children }) {
  const {
    theme: { styles },
  } = useContext(ThemeContext);
  return (
    <>
      <a>{children}</a>
      <style jsx>
        {`
          a {
            display: inline-block;
            padding: 1.7rem 2.5rem;
            border: 1px solid black;
            color: black;
            cursor: pointer;
            ${styles.button};
          }
        `}
      </style>
    </>
  );
}
