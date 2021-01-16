import { ThemeContext } from '@context/*';
import { useContext } from 'react';

export function Heading({ level, children }) {
  const {
    theme: { styles },
  } = useContext(ThemeContext);
  const CustomTag = `h${level}`;

  return (
    <>
      <CustomTag>{children}</CustomTag>
      <style jsx>{`
        h${level} {
          margin: 0;
          ${styles[`h${level}`]};
        }
      `}</style>
    </>
  );
}
