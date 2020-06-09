import React, { KeyboardEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  placeholder?: string;
  size: 'small' | 'medium' | 'big';
  value: string;
  setValue: any;
  onKeyDown?: (event: KeyboardEvent) => void;
  onChange?: (event: ChangeEvent) => void;
}

const InputStyle = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  
  &.small{
    height: 1.55rem;
    padding: 1px 3px;
    font-size: 0.8rem;
  }

  &.medium{
    height: 1.75rem;
    padding: 2px 6px;
    font-size: 1.2rem;
  }

  &.big{
    height: 3.05rem;
    padding: 5px 10px;
    font-size: 1.55rem;
  }
`;

const Input = ({
  placeholder,
  size= "medium",
  value,
  setValue,
  onKeyDown,
  onChange
}:InputProps) => {

  onChange  = (event:ChangeEvent) => {
    setValue(event.target.value);
    console.log(event.target);
  };

  onKeyDown = (event: KeyboardEvent) => {
    console.log(event.key);
  };

  const commonProps = {
    placeholder,
    value,
    onKeyDown,
    onChange
  }

  return (
    <InputStyle {...commonProps} className={size}/>
  );
};

export default Input;