"use client";

import { countries, visaCategories } from "@constants";
import {
  Button,
  CheckboxWrapper,
  Error,
  InputField,
  InputWrapper,
  Text,
  Dropdown,
  FileUploader,
  Textarea,
} from "@lib";
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface LeadFormFields {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  countryCitizenship: string;
  visa: string;
  resume: FileList;
  additionalInfo: string;
}

interface LeadFormProps {
  setIsSubmitted: (isSubmitted: boolean) => void;
}

export const LeadForm: FC<LeadFormProps> = ({ setIsSubmitted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<LeadFormFields>();

  const onSubmit = async (data: LeadFormFields) => {
    console.log("Submitted Data:", data);
    // Simulate API call
    // await fetch("/api/leads", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    setIsSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Image src="/icons/info.svg" alt="dice" width={50} height={50} />
      <Text size="medium" weight="bold">
        Want to understand your visa options?
      </Text>
      <Text size="small" weight="bold" textalign="center">
        Submit the form below and our team of experienced attorneys will review
        your information and send a preliminary assessment of your case based on
        your goals.
      </Text>
      <FormFields>
        <InputWrapper>
          <InputField
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "First name must be at least 2 characters",
              },
            })}
            onBlur={() => trigger("firstName")}
            placeholder="First Name"
          />
          {errors.firstName && <Error>{errors.firstName.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <InputField
            {...register("lastName", {
              required: "Last name is required",
              minLength: {
                value: 2,
                message: "Last name must be at least 2 characters",
              },
            })}
            onBlur={() => trigger("lastName")}
            placeholder="Last Name"
          />
          {errors.lastName && <Error>{errors.lastName.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <InputField
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            onBlur={() => trigger("email")}
            placeholder="Email"
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <InputField
            {...register("linkedin", {
              required: "LinkedIn URL is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/i,
                message: "Enter a valid LinkedIn URL",
              },
            })}
            placeholder="LinkedIn URL"
            onBlur={() => trigger("linkedin")}
          />
          {errors.linkedin && <Error>{errors.linkedin.message}</Error>}
        </InputWrapper>
        <InputWrapper>
          <Dropdown.Root
            {...register("countryCitizenship", {
              required: "Select a country",
            })}
            onBlur={() => trigger("countryCitizenship")}
          >
            <Dropdown.Option value="">Country of citizenship</Dropdown.Option>
            {countries.map(({ label, value }) => (
              <Dropdown.Option value={value} key={value}>
                {label}
              </Dropdown.Option>
            ))}
          </Dropdown.Root>
          {errors.countryCitizenship && (
            <Error>{errors.countryCitizenship.message}</Error>
          )}
        </InputWrapper>
        <Image
          className="form-image"
          src="/icons/dice.svg"
          alt="dice"
          width={50}
          height={50}
        />

        <CheckboxWrapper.Root>
          <Text size="medium" weight="bold" textalign="center">
            Visa categories of interest?
          </Text>
          <div>
            {visaCategories.map(({ title, value }) => (
              <CheckboxWrapper.Label key={value}>
                <CheckboxWrapper.Option
                  value={value}
                  {...register("visa", {
                    required: "Select at least one visa category",
                  })}
                  onBlur={() => trigger("countryCitizenship")}
                />
                {title}
              </CheckboxWrapper.Label>
            ))}
          </div>
          {errors.visa && <Error>{errors.visa.message}</Error>}
        </CheckboxWrapper.Root>
        <InputWrapper>
          <FileUploader
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("resume", {
              required: "Resume is required",
              validate: {
                fileType: (files) =>
                  files[0]?.type === "application/pdf" ||
                  files[0]?.type ===
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                  "Only PDF or DOCX files are allowed",
                fileSize: (files) =>
                  files[0]?.size <= 5 * 1024 * 1024 ||
                  "File size must be less than 5MB",
              },
            })}
          />
          {errors.resume && <Error>{errors.resume.message}</Error>}
        </InputWrapper>
        <Image
          src="/icons/heart-balloon.svg"
          alt="dice"
          width={50}
          height={50}
          className="form-image"
        />
        <Text size="medium" weight="bold" textalign="center">
          How can we help you?
        </Text>
        <InputWrapper>
          <Textarea
            {...register("additionalInfo")}
            placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
            rows={5}
            resize="vertical"
          />
        </InputWrapper>
        <Button size="full" type="submit">
          Submit
        </Button>
      </FormFields>
    </Form>
  );
};

const Form = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const FormFields = styled.div`
  max-width: 400px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  .form-image {
    align-self: center;
    margin-top: 20px;
  }
`;
