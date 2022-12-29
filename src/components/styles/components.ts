import styled from "@emotion/styled";

// * ASIDE STYLES

export const AsideTitle = styled.h2`
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export const Button = styled.button`
  border: none;
  border-left: 1px solid black;
  background-color: beige;
  cursor: pointer;
  color: black;
  font-weight: bold;
  border-radius: 0 0.4rem 0.4rem 0;
`;

export const TrashButton = styled.button`
  border: none;
  margin-left: 1rem;
  background-color: beige;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
`;

export const Input = styled.input`
  background-color: white;
  color: black;
  font-weight: bold;
  outline: none;
  padding: 0.1rem;
  border: none;
  border-radius: 0.4rem 0 0 0.4rem;

  &:hover {
  }
`;

export const Select = styled.select`
  background-color: white;
  color: black;
  font-weight: bold;
  outline: none;
  padding: 0.1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.2rem;
  text-align: center;
`;

export const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const List = styled.div`
  width: 100%;
  padding-top: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 0.5rem;
    background-color: #f5f5f5;
    border: 1px solid black;
  }
`;

// * TABLE STYLES

export const TableTitle = styled.h2`
  color: black;
  font-weight: bold;
`;

export const TableBox = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 0 0.5rem;
`;
