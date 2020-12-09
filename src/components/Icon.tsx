import classNames from 'classnames';
import { FeatherAttributes, IconName, icons } from 'feather-icons';
import React from 'react';

import { HTMLDivProps } from '../types';

interface IconProps extends HTMLDivProps {
  icon: IconName;
  iconProps?: FeatherAttributes;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { className, iconProps, ...otherProps } = props;
  return (
    <div
      className={classNames('feather-icon', className)}
      dangerouslySetInnerHTML={{ __html: icons[props.icon].toSvg({ ...iconProps }) }}
      {...otherProps}
    ></div>
  );
};
