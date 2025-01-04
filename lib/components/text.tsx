import styled from "styled-components";

interface TextProps {
  size?: "small" | "medium" | "large" | "xLarge";
  weight?: "bold" | "normal" | "lighter";
  textalign?: "left" | "center" | "right";
}

const textSizes = {
  small: "0.75rem",
  medium: "1rem",
  large: "1.25rem",
  xLarge: "1.5rem",
};

const textWeights = {
  bold: "bold",
  normal: "normal",
  lighter: "lighter",
};

export const Text = styled.p<TextProps>`
  color: #000;
  font-size: ${({ size }) => textSizes[size || "medium"]};
  font-weight: ${({ weight }) => textWeights[weight || "normal"]};
  text-align: ${({ textalign }) => textalign || "left"};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;
