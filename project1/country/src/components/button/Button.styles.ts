import styled from "styled-components";

const options = {
  kind: {
    primary: "rgb(0,120,121)",
    secondary: "rgb(121,144,87)",
  },

  size: {
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "22px",
    },
    padding: {
      sm: "4px 4px",
      md: "8px 8px",
      lg: "4px 20px",
    },
  },
};

export const Wrapper = styled.button<{
  kind: "primary" | "secondary";
  size: "sm" | "md" | "lg";
}>`
  background-color: ${(props) => options.kind[props.kind]};
  font-size: ${(props) => options.size.fontSize[props.size]};
  padding: ${(props) => options.size.padding[props.size]};
  color: white;
  border-radius: 20px;
  /* font-weight: bold; */
  border: none;
`;
