import * as React from 'react';
import { useRouter } from 'next/router';

export function Heading({ id = '', level = 1, children, className }) {
  const router = useRouter();
  const Component = `h${level}`;
  const isDocs = router.pathname.startsWith('/docs');

  return (
    <Component
      className={['heading', `heading-${level}`, className].filter(Boolean).join(' ')}
      id={id}
    >
      {isDocs && level !== 1 ? <HeadingLink href={`#${id}`} /> : null}
      <span>{children}</span>
      <style jsx>{`
        .heading {
          color: var(--text-prominent);
          line-height: 1.2;
          margin-top: var(--offset);
          position: relative;
          scroll-margin-top: calc(var(--header-height) + var(--offset));
        }

        /* quick-and-dirty leading trim */
        .heading:not(.heading-1)::before {
          content: '';
          display: table;
          margin-bottom: -0.1818em;
        }
        .heading:not(.heading-1)::after {
          content: '';
          display: table;
          margin-top: -0.1818em;
        }

        .heading-1 {
          font-size: 2.2rem;
        }
        .heading-2 {
          --offset: var(--scroll-offset);
          font-size: 1.4rem;
        }
        .heading-3 {
          --offset: var(--scroll-offset);
          font-size: 1.2rem;
        }
        .heading-4 {
          --offset: var(--scroll-offset);
          font-size: var(--fs-standard);
        }
      `}</style>
    </Component>
  );
}

function HeadingLink({ href }) {
  return (
    <>
      <a href={href} aria-label="Anchor" className="heading-link">
        <style jsx>{`
          .heading-link {
            left: 0;
            opacity: 0;
            padding-right: 0.5rem;
            position: absolute;
            text-decoration: none;
            transform: translateX(-100%);
            transition: opacity 100ms linear;
          }
          .heading-link::after {
            content: '#';
          }
          /* ":global" because jsx|style doesn't understand classes outside of the component */
          :global(.heading:hover) .heading-link {
            opacity: 0.5;
          }
          /* ":global(.heading)" required to increase specificity */
          :global(.heading) .heading-link:hover {
            opacity: 1;
          }
        `}</style>
      </a>
    </>
  );
}
