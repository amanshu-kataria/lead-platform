import styled from "styled-components";

interface TextareaProps {
  resize?: "none" | "both" | "horizontal" | "vertical";
}

export const Textarea = styled.textarea<TextareaProps>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  resize: ${({ resize }) => resize || "both"};
  background-color: white;
  color: #333;
  margin-top: 1rem;

  &:hover {
    border-color: #007bff;
  }

  &::placeholder {
    font-size: 0.8rem;
    color: #999;
  }
`;
