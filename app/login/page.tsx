"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { InputWrapper, Text, InputField, Button } from "@lib";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Dummy validation logic
    if (email === "admin@tryalma.ai" && password === "tryalma") {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/leads");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleLogin}>
        <Text size="xLarge" weight="bold">
          Login
        </Text>
        <InputWrapper>
          <Label>Email</Label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Password</Label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </InputWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f9f9f9;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
`;
