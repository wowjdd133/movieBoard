import React from 'react';
import styled from 'styled-components';

type SpanProps = {
  size: 'small' | 'medium' | 'big' | 'title';
  children: React.ReactNode;
  color: string;
  align: 'start' | 'center' | 'flex-end'
}

const SpanStyle = styled.span`
  display: flex;
  justify-content: ${(props: SpanProps) => props.align};
  color: ${(props) => props.color};
  
  &.small{
    font-size: 0.6rem;
  }

  &.medium{
    font-size: 0.95rem;
  }

  &.big{
    font-size: 1.35rem;
    &:hover{
      text-decoration: underline;
    }
  }

  &.title{
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.1;
  }
`

const span = ({
  size= "medium",
  children,
  color= "#fff",
  align= "start",
}:SpanProps) => {

  const commonProps = {
    color,
    align
  }

  return (
    <SpanStyle {...commonProps} className={size}>
      {children}
    </SpanStyle>
  );
};

export default span;