import Link from 'next/link';
import { useRouter } from 'next/router';
import Burger from './Burger';
import { useContext, useState } from 'react';
import { ThemeContext } from '@context/theme';

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(null);
  const {
    theme: {
      styles,
      layout: { spacing, breakpoints },
    },
  } = useContext(ThemeContext);

  function toggleActiveClass() {
    active ? setActive(null) : setActive('active');
  }

  const menuData = [
    {
      name: 'home',
      className: router.pathname === '/' ? 'active' : '',
      href: '/',
    },
    {
      name: 'blog',
      className: router.pathname.startsWith('/posts') ? 'active' : '',
      href: '/posts',
    },
    {
      name: 'about',
      className: router.pathname === '/about' ? 'active' : '',
      href: '/about',
    },
  ];

  return (
    <div className={'overlay ' + (active ? 'active' : '')}>
      <div className={'menu ' + (active ? 'active' : '')}>
        <h1>Dan Beck</h1>
        <Burger active={active} onClick={() => toggleActiveClass()} />
      </div>
      <div className={'container ' + (active ? 'active' : '')}>
        <ul className={active ? 'active' : ''}>
          {menuData.map(({ name, className, href }) => (
            <li key={name}>
              <Link href={href}>
                <a className={className}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .overlay.active {
            position: fixed;
            height: 100vh;
            top: 0;
            left: 0;
            padding: 1.5rem ${spacing.mobile.small};
            z-index: 1;
            background: white;
          }

          .menu {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
          }

          .menu.active {
            padding-bottom: ${spacing.mobile.small};
            width: calc(100vw - (${spacing.mobile.small}*2));
          }

          .container {
            flex: 2 100%;
          }

          h1 {
            display: inline-block;
            margin: 0;
            ${styles.h1};
          }

          h2 {
            color: red;
            ${styles.h2}
          }

          ul {
            display: none;
            height: 100vh;
            text-align: right;
            list-style: none;
            margin: 0;
            padding: 0;
            background-color: #fff;
            flex-direction: column;
            justify-content: flex-start;
          }

          .active ul {
            display: flex;
          }

          .active ul > li {
            opacity: 0;
            animation: fadeIn ease-in-out 500ms;
            animation-fill-mode: both;
          }

          .active ul > li:first-child {
            animation-delay: 0.25s;
          }

          .active ul > li:nth-child(2) {
            animation-delay: 0.5s;
          }

          .active ul > li:last-child {
            animation-delay: 0.75s;
          }

          li {
            margin-bottom: 1.75rem;
            padding: 0 1.5rem 0 0;
            ${styles.subtitleSmall}
          }

          li:last-child {
            margin-bottom: 0;
          }
          .active {
            color: #222;
          }

          @media (min-width: ${breakpoints.tablet.min}) {
            .overlay.active {
              padding: 2.9rem ${spacing.tablet.small};
            }

            .menu.active {
              padding-bottom: 2.9rem;
              width: calc(100vw - (${spacing.tablet.small}*2));
            }
          }

          @media (min-width: ${breakpoints.desktop.min}) {
            .overlay {
              display: flex;
              justify-content: space-between;
            }

            .container {
              flex: 0 1 auto;
              display: inline-block;
              width: auto;
              height: auto;
            }

            .menu {
              height: auto;
              flex-wrap: nowrap;
            }

            ul {
              height: auto;
              line-height: 5.6rem;
            }

            ul,
            li {
              display: inline-block;
            }

            li {
              padding: 0.5rem;
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
