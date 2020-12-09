import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { Icon } from '../components/Icon';
import { HTMLDivProps } from '../types';
import { initScrolling } from './scroll';
import { CommandSidebar } from './sidebar';

import './commands.scss';

const { default: ReactMarkdown } = await import('react-markdown/with-html');
const { default: gfm } = await import('remark-gfm');

const format = (content: string) => {
  return content
    .replace(/<\(/g, '<span class="block mt-2 mb-1 text-sm font-bold tracking-wide text-gray-600">')
    .replace(/\)>/g, '</span>');
};

const parse = (doc: string, tagStart: string, tagEnd: string, pre = false) =>
  doc
    .split(tagStart)
    .filter(section => pre || !!section)
    .map((content, i) => {
      if (i == 0 && pre) return ['_pre', content.trim()];

      let [name, ...body] = content.trim().split(tagEnd);

      if (name.includes('|')) {
        const [primary, ...rest] = name.split('|');
        name = primary;
        body = `<(ALIASES: ${rest.map(cmd => `\`$${cmd}\``).join(', ')})>\n\n${body
          .join(tagEnd)
          .trim()}`.split(tagEnd);
      }
      return [name, format(body.join(tagEnd).trim())];
    })
    .reduce((obj, [prop, val]) => ((obj[prop] = val), obj), {} as Record<string, string>);

const response = await axios
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  .get('/' + (await import('./doc.md')).default.split('/').reverse()[0]);

const sections = parse(response.data, '<[[', ']]>');
const data = Object.keys(sections)
  .map(name => [name, parse(sections[name], '<[', ']>', true)] as [string, Record<string, string>])
  .reduce(
    (obj, [prop, val]) => ((obj[prop] = val), obj),
    {} as Record<string, Record<string, string>>
  );

export default (props: HTMLDivProps): JSX.Element => {
  const { className, ...other } = props;

  useEffect(initScrolling, []);

  return (
    <div className={classNames(className, 'transition duration-75')} {...other}>
      <CommandSidebar data={data} />
      <div className="relative ml-4 lg:ml-56 command-list">
        <div className="flex items-center mt-2 mb-3">
          <Icon icon="terminal" className="mr-3" />
          <span className="block text-2xl text-gray-800">Commands</span>
        </div>
        <span className="block mb-6">
          You can use any of <code>$cmd --help</code>, <code>$cmd -h</code>, and{' '}
          <code>$help cmd</code> to show help for <code>cmd</code>.
        </span>

        {Object.keys(data).map((section, key) => (
          <div key={key} className="mb-16">
            <span
              className={classNames('block tracking-wide text-gray-600 uppercase', {
                'mb-2': !data[section]._pre,
              })}
            >
              {section}
            </span>
            {data[section]._pre && (
              <ReactMarkdown
                allowDangerousHtml
                renderers={{
                  link: link => (
                    <a target="_blank" href={link.href}>
                      {link.node.children[0]?.value ?? ''}
                    </a>
                  ),
                }}
                className="block mb-4 text-gray-600"
                plugins={[gfm]}
                children={data[section]._pre}
              />
            )}
            {Object.keys(data[section])
              .filter(k => !k.startsWith('_'))
              .map((command, key) => (
                <React.Fragment key={key}>
                  <div
                    id={`${section}-${command}`}
                    className="relative"
                    style={{ top: '-6rem' }}
                  ></div>
                  <section
                    id={`${section}-${command}-section`}
                    className="relative"
                    style={{ top: '8rem' }}
                  ></section>
                  <div className="mb-8">
                    <span className="block text-lg font-code">${command}</span>
                    <ReactMarkdown
                      allowDangerousHtml
                      renderers={{
                        link: link => (
                          <a target="_blank" href={link.href}>
                            {link.node.children[0]?.value ?? ''}
                          </a>
                        ),
                      }}
                      className="block"
                      plugins={[gfm]}
                      children={data[section][command]}
                    />
                  </div>
                </React.Fragment>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
