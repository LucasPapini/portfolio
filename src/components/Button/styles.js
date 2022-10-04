import styled from "styled-components";

export const ButtonCP = styled.button`
  background-color: var(--text-roxo-300);
  color: white;

  margin: 1rem 0rem;

  padding: 1rem;

  transition: .5s;

  &:hover{
    background-color: var(--background);
    border: 1px solid var(--text-roxo-300);
    color: var(--text-roxo-300);
  }
`;