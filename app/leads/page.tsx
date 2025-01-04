"use client";
import React from "react";
import { Sidebar } from "./sidebar";
import { Table } from "./table";
import styled from "styled-components";
import { AuthGuard } from "../auth-guard";

export default function Leads() {
  return (
    <AuthGuard>
      <LeadsContainer>
        <Sidebar />
        <Main>
          <h1>Leads</h1>
          <Table />
        </Main>
      </LeadsContainer>
    </AuthGuard>
  );
}

export const LeadsContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;
