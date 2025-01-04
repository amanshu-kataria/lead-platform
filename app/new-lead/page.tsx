"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Container, Logo } from "@lib";
import { LeadForm } from "./form";

import styled from "styled-components";
import { ThankYou } from "./thank-you";

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #dfe6d6;
  padding: 50px;
  height: 250px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackgroundCircle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #a4b588;
  border-radius: 50%;
  margin-left: -30px;
`;

export const CircleWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #b5c59a;
  border-radius: 50%;
  margin-left: -10px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
  max-width: 600px;
`;

export default function LeadFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Head>
        <title>Alma Lead Form</title>
      </Head>
      <section>
        <Banner>
          <LeftSection>
            <CircleWrapper>
              <BackgroundCircle />
              <Circle />
              <Circle />
            </CircleWrapper>
          </LeftSection>
          <RightSection>
            <Logo size="small" />
            <Heading>Get an Assessment of Your Immigration Case</Heading>
          </RightSection>
        </Banner>
        <Container>
          {isSubmitted ? (
            <ThankYou onGoToHomePage={() => setIsSubmitted(false)} />
          ) : (
            <LeadForm setIsSubmitted={setIsSubmitted} />
          )}
        </Container>
      </section>
    </>
  );
}
