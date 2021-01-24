import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from '@context/*';

function themeToObject(themeStyles) {
  const formatString = themeStyles
    .replace(/(\s+)/gi, '')
    .split(';')
    .filter((style) => style !== '');

  return formatString.reduce((accumulator, currentValue) => {
    const values = currentValue.split(':');
    return (accumulator = { ...accumulator, [values[0]]: values[1] });
  }, {});
}

export function Heading({ level, children, ...otherProps }) {
  const isLink = Object.keys(otherProps).length !== 0;
  const {
    theme: { styles },
  } = useContext(ThemeContext);

  function HeadingNoStyle({ level, children }): ReactElement {
    const themeStyles = styles[`h${level}`];
    const externalStyles = themeToObject(themeStyles);
    const linkStyles = isLink
      ? {
          color: '#000',
        }
      : {};

    const CustomHeading = React.createElement(
      `h${level}`,
      { style: { margin: 0, ...externalStyles, ...linkStyles } },
      children
    );
    return CustomHeading;
  }

  if (isLink) {
    return (
      <a {...otherProps}>
        <HeadingNoStyle level={level}>{children}</HeadingNoStyle>
      </a>
    );
  }
  return <HeadingNoStyle level={level}>{children}</HeadingNoStyle>;
}
