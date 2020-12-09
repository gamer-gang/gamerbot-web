import axios from 'axios';
import classNames from 'classnames';
import React from 'react';

import { HTMLDivProps } from '../types';

const { default: ReactMarkdown } = await import('react-markdown/with-html');
const { default: gfm } = await import('remark-gfm');

const source = await axios.get(
  'https://raw.githubusercontent.com/gamer-gang/gamerbot/master/README.md'
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // '/' + (await import('./test.md')).default.split('/').reverse()[0]
);

export default (props: HTMLDivProps): JSX.Element => {
  const { className, ...other } = props;
  return (
    <div className={classNames('flex justify-center mt-4', className)} {...other}>
      <ReactMarkdown
        allowDangerousHtml
        renderers={{
          link: link => (
            <a target="_blank" href={link.href}>
              {link.node.children[0]?.value ?? ''}
            </a>
          ),
        }}
        source={source.data}
        plugins={[gfm]}
        className="block prose markdown"
      />
    </div>
  );
};