import React from 'react';
import * as icons from '../../../src/icons/svg';
import styled from 'styled-components';

export type IconType = keyof typeof icons; // icon의 키로 배열을 만듦.
export const iconTypes: IconType[] = Object.keys(icons) as any[]; //스토리에서 불러오기 위해서.

export type IconProps = {
  icon: IconType;
  color?: string;
  size?: string | number;
}

const Icon = ({icon, color, size=40}:IconProps) => {
  const SVGIcon = icons[icon];

  const SVGIconStyle = styled(SVGIcon)`
    svg{
      height: auto;
      width: ${(props: IconProps) => props.size};
      fill: ${(props: IconProps) => props.color};
    }
  `

  // const commonProps = {
  //   color,
  //   size
  // }

  return (
    <SVGIconStyle size={size} color={color}/>
    // <SVGIcon width={size} height="auto" fill={color}/>
  );
};

export default Icon;