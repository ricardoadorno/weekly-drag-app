import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: darkgray;
  border-bottom: 1px solid #e5e5e5;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3rem;
  padding: 2rem;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: darkgray;
  border-radius: 1rem;
`;

export const Table = styled.table`
  background: lightgray;
  table-layout: fixed;
  width: 100%;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 0 none;
  padding: 1rem;

  thead {
    background: #ff7361;
    text-align: center;

    th: {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    }

    th:first-of-type {
      background-color: lightgray;
      border: 1px solid black;
      font-weight: normal;
    }
  }

  tbody {
    tr {
      cursor: pointer;
    }

    tr > td:first-of-type {
      border-bottom: 1px solid black;
      cursor: text;
      &:hover {
        background-color: #ff7361;
      }
    }

    tr:last-child > td:first-child {
      border-bottom: 0 none;
    }

    td {
      padding: 0.2rem;
    }
  }
`;
