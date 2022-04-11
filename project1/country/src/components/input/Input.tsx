import React from "react";
import { Wrapper, TextInput, Icon } from "./Input.styles";

type InputPropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  value: string;
};

const Input = ({ onChange, onClick, value }: InputPropsType): JSX.Element => {
  return (
    <Wrapper>
      <TextInput onChange={onChange} placeholder="Search" value={value} />{" "}
      <Icon onClick={onClick}>x</Icon>
    </Wrapper>
  );
};

export default Input;
