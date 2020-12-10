import classNames from 'classnames';
import { FeatherAttributes, IconName, icons } from 'feather-icons';
import React from 'react';

import { HTMLDivProps } from '../types';

interface IconProps extends HTMLDivProps {
  icon: IconName;
  iconProps?: FeatherAttributes;
}

export const Icon = ({ className, iconProps, icon, ...other }: IconProps): JSX.Element => (
  <div
    className={classNames('feather-icon', className)}
    dangerouslySetInnerHTML={{ __html: icons[icon].toSvg({ ...iconProps }) }}
    {...other}
  ></div>
);
