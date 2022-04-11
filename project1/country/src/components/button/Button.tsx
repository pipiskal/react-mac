import { Wrapper } from "./Button.styles";

export type ButtonPropsType = {
  kind?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  kind = "primary",
  size = "md",
  onClick,
}: ButtonPropsType): JSX.Element => {
  return (
    <Wrapper kind={kind} size={size} onClick={onClick}>
      Search
    </Wrapper>
  );
};

export default Button;
