import React from 'react';
import Button from '../../atoms/button';
import Icon from '../../atoms/icon';
import { IconType } from "../../atoms/icon/Icon";

type ButtonIconProps = {
  icon: IconType,
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  background?: string,
}

const ButtonIcon = ({
  icon,
  children,
  onClick,
  color,
  background,
}:ButtonIconProps) => {
  const buttonProps = {
    onClick,
    color,
    background
  };

  return (
    <Button size="big" {...buttonProps}>
      <Icon icon={icon} color="#ccc"/>
      {children}
    </Button>
  );
};

export default ButtonIcon;