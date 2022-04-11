import styled from "styled-components";
import { CountryType } from "../../App";

type StyledCardPropsType = {
  flagImg?: string;
};

export const Wrapper = styled.div<StyledCardPropsType>`
  border: 1px solid darkblue;
`;

export const Flag = styled.div<StyledCardPropsType>`
  width: 100%;
  height: 100px;
  background-image: url(${(props) => props.flagImg});
  object-fit: cover;
  background-repeat: no-repeat;
`;

export const Paragraph = styled.p<StyledCardPropsType>`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  color: darkblue;
  padding: 20px 10px;
  border-bottom: 1px solid darkblue;
`;

export const Span = styled.span``;
