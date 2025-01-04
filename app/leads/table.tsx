import { Button } from "@lib";
import React, { useState } from "react";
import styled from "styled-components";

const initialData = [
  {
    name: "Jorge Ruiz",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
    id: 1,
  },
  {
    name: "Bahar Zamir",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Mexico",
    id: 2,
  },
  {
    name: "Mary Lopez",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Brazil",
    id: 3,
  },
  {
    name: "Li Zijin",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "South Korea",
    id: 4,
  },
  {
    name: "Mark Antonov",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "Russia",
    id: 5,
  },
  {
    name: "Jane Ma",
    submitted: "02/02/2024, 2:45 PM",
    status: "Reached Out",
    country: "Mexico",
    id: 6,
  },
  {
    name: "Anand Jain",
    submitted: "02/02/2024, 2:45 PM",
    status: "Pending",
    country: "India",
    id: 7,
  },
];

export const Table = () => {
  const [data, setLeads] = useState(initialData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortColumn, setSortColumn] = useState<
    "name" | "submitted" | "status" | "country" | null
  >(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const handleSort = (column: "name" | "submitted" | "status" | "country") => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    const sortedData = [...data].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });

    setLeads(sortedData);
  };

  // if it's a huge data, then filtering should ideally should happen in the backend
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter ? item.status === statusFilter : true)
  );

  const handleStatusChange = (id: number) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === id ? { ...lead, status: "Reached Out" } : lead
      )
    );
  };

  return (
    <TableWrapper>
      <SearchWrapper>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <FilterWrapper>
          <select value={statusFilter} onChange={handleFilter}>
            <option value="">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Reached Out">Reached Out</option>
          </select>
        </FilterWrapper>
      </SearchWrapper>
      <TableContainer>
        <thead>
          <TableRow>
            <TableHead onClick={() => handleSort("name")}>
              Name {sortColumn === "name" && (sortOrder === "asc" ? "↓" : "↑")}
            </TableHead>
            <TableHead onClick={() => handleSort("submitted")}>
              Submitted
              {sortColumn === "submitted" && (sortOrder === "asc" ? "↓" : "↑")}
            </TableHead>
            <TableHead onClick={() => handleSort("status")}>
              Status
              {sortColumn === "status" && (sortOrder === "asc" ? "↓" : "↑")}
            </TableHead>
            <TableHead onClick={() => handleSort("country")}>
              Country
              {sortColumn === "country" && (sortOrder === "asc" ? "↓" : "↑")}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.submitted}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.country}</TableCell>
              <TableCell>
                {item.status === "Pending" && (
                  <Button onClick={() => handleStatusChange(item.id)}>
                    Mark as Reached Out
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableContainer>
      <Pagination>
        <span>{"<"}</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>{">"}</span>
      </Pagination>
    </TableWrapper>
  );
};

export const TableWrapper = styled.div`
  margin-top: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;

  input {
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const FilterWrapper = styled.div`
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHead = styled.th`
  text-align: left;
  padding: 0.75rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #eaeaea;
  }
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  color: #555;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
  gap: 0.5rem;
  border-top: 1px solid #e0e0e0;

  span {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    color: #333;

    &:hover {
      background: #eaeaea;
    }
  }
`;
