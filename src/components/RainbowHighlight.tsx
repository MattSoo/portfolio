import React from "react";
import { RoughNotation } from "react-rough-notation";

interface RainbowHighlightProps {
  color: string;
  children: React.ReactNode;
}

export const RainbowHighlight: React.FC<RainbowHighlightProps> = ({ color, children }) => {
  const childArray = React.Children.toArray(children);
  const animationDuration = Math.floor(30 * childArray.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
