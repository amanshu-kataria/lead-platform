import styled from "styled-components";

interface ButtonProps {
  size?: "small" | "medium" | "large" | "full";
}

const parseWidth = (size?: string) => {
  switch (size) {
    case "small":
      return "100px";
    case "medium":
      return "200px";
    case "large":
      return "300px";
    case "full":
      return "100%";
    default:
      // fit content
      return "auto";
  }
};

export const Button = styled.button<ButtonProps>`
  background: #212121;
  color: white;
  padding: 10px 15px;
  border: 1px solid #212121;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.75rem;
  min-width: ${({ size }) => parseWidth(size)};
  text-transform: capitalize;
`;
