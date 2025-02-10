# Authentication API with Node.js, React, and SendGrid
[![pt-br](https://img.shields.io/badge/language-pt--br-green.svg)](https://github.com/cardoso-m/backend-sendgrid/blob/main/README.pt-br.md)
[![en](https://img.shields.io/badge/language-en-orange.svg)](https://github.com/cardoso-m/backend-sendgrid/blob/main/README.md)

This is an authentication API developed with **Node.js**, **React**, **PostgreSQL**, and **SendGrid**. It contains three main screens: **Signin**, **Signup**, and **Validate**. The purpose of the application is to allow users to register, confirm their email, and be added to the database.

## Setup Steps

### 1. Clone the Repositories

```bash
git clone https://github.com/cardoso-m/frontend-sendgrid
git clone https://github.com/cardoso-m/backend-sendgrid
```

### 2. Install Backend Dependencies

```bash
cd backend-sendgrid
npm install
```

### 3. Create the `.env` File

```bash
touch .env
```

#### Open the `.env` file and add the following configurations:

```bash
## Database
DB_HOST='127.0.0.1'
DB_NAME='YOUR_DATABASE_NAME'
DB_USER='YOUR_DATABASE_USER'
DB_PORT='5432'
DB_PASS='YOUR_PASSWORD'

## SendGrid
EMAIL='YOUR_EMAIL'
SENDGRID_API_KEY='YOUR_API_KEY'
```

> **Note:** Generate your key on SendGrid at [https://sendgrid.com/](https://sendgrid.com/).

### 4. Database Setup

- Access **pgAdmin** and create a database named `sendgrid`.
- Fill in the credentials in the `.env` file as shown above.

### 5. SendGrid Setup

- Create an account on SendGrid at [https://sendgrid.com/](https://sendgrid.com/) and validate your email.
- After that, generate your API Key in the SendGrid dashboard at [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys).
- Copy the generated key and paste it into the `.env` file under the `SENDGRID_API_KEY` key.

### 6. Running Migrations and Starting the Project

**Backend**

For the backend, run the following commands in the terminal:

```bash
npm run migrate
npm run dev
```

**Frontend**

First, install the dependencies in the frontend directory:

```bash
cd frontend-sendgrid
npm install
```

Then, start the frontend application:

```bash
npm run dev
```

> **Important:** You need to have **two terminals open**: one for the backend and another for the frontend.

### 7. Accessing the Application

The application has three main routes:

- **/signin**: Where the user enters their name, email, and password.
- **/signup**: Registration screen with the option to "Sign Up".
- **/validate**: Screen to enter the code sent to the email.

After registering at the `/signup` route, a verification code will be sent to the provided email. The user needs to enter the code at the `/validate` route to complete the registration and be added to the database.
