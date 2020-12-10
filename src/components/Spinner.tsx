import classNames from 'classnames';
import React from 'react';

import { HTMLDivProps } from '../types';

import './Spinner.scss';

export const Spinner = ({ className, ...other }: HTMLDivProps): JSX.Element => (
  <div
    className={classNames(
      className,
      'spinner',
      'overflow-visible flex justify-center items-center align-middle'
    )}
    {...other}
  >
    <div className="spinner-animation">
      <svg
        width="50"
        height="50"
        stroke-width="8.00"
        viewBox="1.00 1.00 98.00 98.00"
        className="block"
      >
        <path
          className="spinner-track"
          d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
        ></path>
        <path
          className="spinner-head"
          d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
          pathLength="280"
          stroke-dasharray="280 280"
          stroke-dashoffset="210"
        ></path>
      </svg>
    </div>
  </div>
);
