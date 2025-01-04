This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Please ensure that node is installed on you machine.
You can download latest node version here: https://nodejs.org/en/download

To run the application in your local environment run the following commands:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. By default, you'll be redirected to the new lead form.

To access the leads list visit the http://localhost:3000/leads
This will lead to a login page as this is protected by auth guard.

Use the following credentials to login
username: admin@tryalma.ai
password: tryalma

## Tech stack

- Nextjs
- react-hook-form: For form validation
- Styled components: for styling

### Components

- Form: A form component for inputting lead information (name, email, phone, address).
- LeadList: A component to display a list of leads.
- Login Page

### Reusable components

There are a lot of components in this repo, which are being reused. e.g: Text, Input field, Button, etc. These reusable components reside under lib/components
The lib directory contains shared resources as well, such as logo and other styled components.

### Constants

All the constants are stored in a /constant directory.

### Icons

All icons are stored in public/icons directory
