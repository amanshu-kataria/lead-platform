import styled from "styled-components";

export const FileUploader = styled.input.attrs({ type: "file" })`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9f9f9;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
