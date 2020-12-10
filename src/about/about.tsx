import axios from 'axios';
import classNames from 'classnames';
import React from 'react';

import { UnsafeMarkdown } from '../components/Markdown';
import { HTMLDivProps } from '../types';

('./home.scss');

const source = await axios.get(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  '/' + (await import('./about.md')).default.split('/').reverse()[0]
);

export default ({ className, ...other }: HTMLDivProps): JSX.Element => (
  <div className={classNames('flex justify-center mt-4', className)} {...other}>
    <UnsafeMarkdown source={source.data} className="block prose markdown" />
  </div>
);
