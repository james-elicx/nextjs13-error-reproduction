'use client';

// From https://beta.nextjs.org/docs/api-reference/use-selected-layout-segment

import Link from 'next/link';
// import { useSelectedLayoutSegment } from 'next/navigation';

// This *client* component will be imported into a blog layout
export default function NavLink({
  href,
  children,
}: {
  href: string,
  children: React.ReactNode,
}) {
  // Navigating to `/blog/hello-world` will return 'hello-world'
  // for the selected layout segment

  // I would use `useSelectedLayoutSegment` to highlight the active link, but it doesn't work in edge runtime...
  // see https://github.com/vercel/next.js/issues/44725
  // const segment = useSelectedLayoutSegment() ?? '';
  const isActive = href.slice(1) === 'segment';

  return (
    <Link
      href={href}
      // Change style depending on whether the link is active
      style={{ padding: '8px 24px', margin: '8px', background: isActive ? '#666666' : '#262626', borderRadius: '8px', fontWeight: isActive ? 'bold' : 'normal', transition: 'background 0.15s ease' }}
    >
      {children}
    </Link>
  );
}