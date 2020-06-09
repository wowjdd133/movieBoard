import React,{useState} from 'react';
import Input from '../../components/atoms/input';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";
import styled from 'styled-components';

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs],
};

const Inputbox = styled.div`
  widtH: 400px;
  height: 100%;
`

export const InputF = () => {
  const [value,setValue] = useState("123");
  const size = select("size",["small", "medium", "big"],"medium");
  const placeholder = text("placeholder","Input");

  return(
    <Inputbox>
      <Input value={value} size={size} setValue={setValue}
      placeholder={placeholder}
      onKeyDown={action('keyDown')}
      onChange={action('change')}/>
    </Inputbox>
  )
}