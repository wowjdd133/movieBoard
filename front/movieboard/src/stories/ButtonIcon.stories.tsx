import ButtonIcon from '../../components/molecules/buttonIcon';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import React from 'react';

export default {
  title: "buttonIcon",
  component: ButtonIcon,
  decorators: [withKnobs]
}

//icon type array로 변경하기.

export const buttonIcon = () => {
  const icon = select("icon",["bed","chat","delete","eye","good","pencil","search"],"bed");
  const color = text("color","#000");
  const background = text('background','#000');
  const children = text("children","새 글 쓰기");

  return(
    <ButtonIcon icon={icon} background={background} color={color} onClick={action('hi')}>
      {children}
    </ButtonIcon>
  )
}