import React from "react";

import { Wrapper} from './Button.styles'

interface Props {
  children?: React.ReactNode;
  text?: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  children,
  text,
  onClick
}) => {
  const value = text || children;
  return (
    <Wrapper onClick = {onClick}>
      {value}
    </Wrapper>
  );
}

export default Button;
