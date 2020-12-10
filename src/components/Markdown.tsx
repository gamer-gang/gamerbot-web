import React from 'react';

import { HTMLDivProps } from '../types';

const { default: ReactMarkdown } = await import('react-markdown/with-html');
const { default: gfm } = await import('remark-gfm');

export const UnsafeMarkdown = ({
  source,
  ...other
}: Omit<HTMLDivProps & { source: string }, 'children'>): JSX.Element => (
  <ReactMarkdown
    allowDangerousHtml
    renderers={{
      link: link => (
        <a target="_blank" rel="noopener" href={link.href}>
          {link.node.children[0]?.value ?? ''}
        </a>
      ),
    }}
    plugins={[gfm]}
    source={source}
    {...other}
  />
);
