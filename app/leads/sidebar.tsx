import { Logo } from "@lib";
import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo size="large" />
      <NavList>
        <NavItem active>Leads</NavItem>
        <NavItem>Settings</NavItem>
      </NavList>
      <AdminSection>
        <AdminAvatar>A</AdminAvatar>
        <AdminName>Admin</AdminName>
      </AdminSection>
    </SidebarContainer>
  );
};

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-right: 1px solid #e0e0e0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

export const NavItem = styled.li<{ active?: boolean }>`
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ active }) => (active ? "#000" : "#555")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:hover {
    color: #333;
  }
`;

export const AdminSection = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const AdminAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;

export const AdminName = styled.div`
  font-size: 1rem;
  color: #333;
`;
