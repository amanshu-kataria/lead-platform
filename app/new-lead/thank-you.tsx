import { Button, Text } from "@lib";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

interface ThankYouProps {
  onGoToHomePage: () => void;
}

export const ThankYou: FC<ThankYouProps> = ({ onGoToHomePage }) => {
  return (
    <ThankYouContainer>
      <Image src="/icons/info.svg" alt="Thank you" width={50} height={50} />
      <Text size="large" weight="bold">
        Thank you
      </Text>
      <Text weight="bold" textalign="center">
        Your information was submitted to our team of immigration attorneys.
        Expect an email from hello@tryalma.ai.
      </Text>
      <Button onClick={onGoToHomePage}>Go back to homepage</Button>
    </ThankYouContainer>
  );
};

const ThankYouContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-top: 50px;
`;
