import styled from 'styled-components';
import React from 'react';

//Link가 있으면 Link to하는 걸로 바꾸자.

type ButtonProps  = {
  border?: string;
  transparent?: boolean;
  background? : string;
  color?: string;
  children: React.ReactNode;
  size: 'small' | 'medium'| 'big';
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  iconOnly?: boolean;
}

const ButtonStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 3.7px;
  box-sizing: border-box
  cursor: pointer;
  border: ${(props: ButtonProps) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  background: ${(props: ButtonProps) => (props.transparent ? 'transparent' : props.background)};
  color: ${(props: ButtonProps) => props.color};

  svg{
    margin-right: 1em;
    width: 1em;
  }

  &.small{
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  }

  &.medium{
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  }

  &.big{
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  }

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`

const Button = (
  {children,
  color = 'black',
  border = 'none',
  background = 'white',
  transparent = false,
  type = 'button',
  size = 'medium',
  onClick
}: ButtonProps) => {
  
  const commonProps = {
    color,
    border,
    background,
    transparent,
    type
  };

  console.log(commonProps);


  return(
  <ButtonStyle {...commonProps} className={size} onClick={onClick}>
    {children}
  </ButtonStyle>
  )
}

export default Button;