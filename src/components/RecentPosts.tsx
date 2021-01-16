import { Heading } from '@components/*';

export function RecentPosts() {
  return (
    <>
      <section>
        <header>
          <Heading level={2}>Recent Posts</Heading>
          <main></main>
        </header>
      </section>
      <style jsx>{`
        header {
          width: 100vw;
          padding: 4.8rem 0;
          text-align: center;
          background: black;
          color: white;
        }
      `}</style>
    </>
  );
}
