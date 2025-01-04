import styled from "styled-components";

interface InputWrapperProps {
  width?: string | number;
}

const parseWidth = (width: string | number) => {
  if (typeof width === "number") {
    return `${width}px`;
  }

  return width;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  margin-bottom: 1rem;
  width: ${({ width }) => (width ? parseWidth(width) : "100%")};
  ${({ width }) => (width ? "" : "max-width: 400px;")};
`;
