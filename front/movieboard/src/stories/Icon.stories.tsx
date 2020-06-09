import { withKnobs, text, select } from "@storybook/addon-knobs";
import Icon from "../../components/atoms/icon";
import React from "react";
import { iconTypes } from "../../components/atoms/icon/Icon";

export default {
  title: 'icon',
  component: Icon,
  decorators: [withKnobs]
};

export const icon = () => {
  const icon = select('icon',["bed","chat","delete","eye","good","pencil","search"],"bed");
  const color = text('color','#ccc');
  const size = text('size', '400');

  return(
    <Icon icon={icon} size={size} color={color}/>
  )
}

export const listOfIcons = () => {
  return (
    <ul>
      {iconTypes.map(icon => {
        return(
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
        )
      })}
    </ul>
  )
}
