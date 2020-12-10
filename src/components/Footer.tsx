import classNames from 'classnames';
import React from 'react';

import { HTMLDivProps } from '../types';

export const Footer = ({ className, ...other }: HTMLDivProps): JSX.Element => (
  <footer
    className={classNames(
      className,
      'object-bottom bottom-0 left-0 w-auto p-2 mt-4 -mx-4 -mb-4 z-50 bg-gray-400'
    )}
    {...other}
  >
    © 2020{' '}
    <a target="_blank" rel="noopener" href="https://github.com/gamer-gang">
      gamer-gang
    </a>
    , MIT license. Powered by Firebase.
  </footer>
);
