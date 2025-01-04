import styled from "styled-components";

export const CheckboxWrapper = {
  Root: styled.div`
    margin-bottom: 1rem;
    div {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }
  `,
  Label: styled.label`
    font-size: 1rem;
    margin-bottom: 0.5rem;

    input {
      margin-right: 0.5rem;
    }
  `,
  Option: styled.input.attrs({ type: "checkbox" })`
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  `,
};
