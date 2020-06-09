import React from 'react';
import { withKnobs, text, select} from '@storybook/addon-knobs';
import Span from '../../components/atoms/span';

export default {
  title: 'Span',
  component: Span,
  decorators: [withKnobs]
}

export const span = () => {
  
  const size = select("span",["small", "medium", "big","title"],"medium");
  const color = text("color","#000");
  const children = text("children","한국의 정입니다.");
  const align = select("align",["start","center","flex-end"],"start");
  
  return(
    <Span size={size} align={align} color={color}>
      {children}
    </Span>
  )
}