import styled from "styled-components";

export const Dropdown = {
  Root: styled.select`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background: white;
    appearance: none;
    background-image: url("/icons/caret-down.svg");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 18px;
  `,
  Option: styled.option`
    [value=""] {
      color: gray;
    }
  `,
};
