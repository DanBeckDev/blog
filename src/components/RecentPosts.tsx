import { Heading } from '@components/*';
import { ThemeContext } from '@context/*';
import { parseISO } from 'date-fns';
import { PostContent } from 'lib/posts';
import { getTag } from 'lib/tags';
import { Fragment, useContext } from 'react';
import TagButton from './TagButton';
import Date from './Date';
import Link from 'next/link';

type Props = {
  posts: PostContent[];
};

export function RecentPosts({ posts }: Props) {
  const {
    theme: {
      layout: { spacing, breakpoints },
    },
  } = useContext(ThemeContext);
  return (
    <>
      <section>
        <header>
          <Heading level={2}>Recent Posts</Heading>
        </header>
        <main>
          {posts.map(
            ({ thumbnail, title, tags, date, slug }, index, allPosts) => {
              return (
                <Fragment key={title}>
                  <article>
                    <Link href={'/posts/' + slug} passHref>
                      <Heading level={3}>{title}</Heading>
                    </Link>
                    <Link href={'/posts/' + slug}>
                      <img src={thumbnail} />
                    </Link>
                    <footer>
                      <Date date={parseISO(date)} />
                      <ul className={'tag-list'}>
                        {tags.map((it, i) => (
                          <li key={i}>
                            <TagButton tag={getTag(it)} />
                          </li>
                        ))}
                      </ul>
                    </footer>
                  </article>
                  {index !== allPosts.length - 1 ? <hr /> : null}
                </Fragment>
              );
            }
          )}
        </main>
      </section>
      <style jsx>{`
        header {
          width: 100vw;
          padding: 4.8rem 0;
          text-align: center;
          background: black;
          color: white;
        }
        img {
          width: 100%;
        }

        hr {
          width: 24.8rem;
        }

        article {
          padding: 5rem ${spacing.mobile.large};
        }

        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
        }

        ul,
        p {
          margin: 0;
        }

        .tag-list {
          list-style: none;
          text-align: right;
          padding: 0;
        }
        .tag-list li {
          display: inline-block;
          margin-left: 0.5rem;
        }

        @media (min-width: ${breakpoints.tablet.min}) {
          article {
            padding: 5rem ${spacing.tablet.large};
          }
        }

        @media (min-width: ${breakpoints.desktop.min}) {
          article {
            padding: 5rem ${spacing.desktop.large};
          }
        }
      `}</style>
    </>
  );
}
