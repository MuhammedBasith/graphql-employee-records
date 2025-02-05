# Employee Records Management System

This is a full-stack Employee Records Management System built with GraphQL, React, Express, and MongoDB. It allows users to manage employee records, including creating, reading, updating, and deleting employee data. The backend uses Apollo Server with a GraphQL API, while the frontend is built with React and hosted on Vercel.

---

## Demo

You can view the live version of the project on Vercel:

[Employee Records - Live Demo](https://graphql-employee-records.vercel.app/)

---

## Features

- **Create Employee Records**: Allows users to add new employee records including name, position, and level.
- **Update Employee Records**: Users can update existing records by editing employee information.
- **Delete Employee Records**: Users can remove an employee record from the system.
- **GraphQL API**: The backend exposes a GraphQL API to interact with the employee data.
- **Responsive Design**: The frontend is responsive and works seamlessly across devices.
  
---

## Tech Stack

- **Frontend**: 
  - React
  - React Router
  - Tailwind CSS
- **Backend**:
  - Apollo Server
  - GraphQL
  - Express.js
  - MongoDB
- **Deployment**:
  - Frontend: Vercel
  - Backend: Render
  
---

## Installation

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/MuhammedBasith/graphql-employee-records.git
cd graphql-employee-records
```

### 2. Set up the Backend

The backend uses Apollo Server with Express.

#### Install Dependencies

```bash
cd server
npm install
```

#### Configure Environment Variables

Ensure you have MongoDB set up and the connection string is available. You can configure it in an `.env` file:

```bash
ATLAS_URI=your-mongodb-connection-string
PORT=5050
```

#### Run the Backend

Start the backend server:

```bash
cd server
node server.js
```

The backend will be running on `http://localhost:5050`.

### 3. Set up the Frontend

The frontend is built using React.

#### Install Dependencies

```bash
cd client
npm install
```

#### Run the Frontend

Start the frontend development server:

```bash
npm start
```

The frontend will be available on `http://localhost:3000`.

---

## How to Use

1. **Home Page**: Displays a list of employee records in a table.
2. **Create Employee**: Click on the "Create Employee" button to add a new employee record.
3. **Edit Employee**: Click on the "Edit" button next to any employee record to update their details.
4. **Delete Employee**: Click on the "Delete" button to remove an employee record from the system.

---

## GraphQL API

The backend exposes a GraphQL API for fetching, creating, updating, and deleting employee records.

### Queries

- **Get All Records**: Fetch all employee records.

```graphql
query {
  records {
    _id
    name
    position
    level
  }
}
```

- **Get a Single Record**: Fetch a single employee record by ID.

```graphql
query {
  record(id: "employee-id") {
    name
    position
    level
  }
}
```

### Mutations

- **Create a Record**: Add a new employee record.

```graphql
mutation {
  createRecord(name: "John Doe", position: "Developer", level: "Junior") {
    _id
    name
    position
    level
  }
}
```

- **Update a Record**: Update an existing employee record.

```graphql
mutation {
  updateRecord(id: "employee-id", name: "John Doe", position: "Senior Developer", level: "Senior") {
    _id
    name
    position
    level
  }
}
```

- **Delete a Record**: Remove an employee record.

```graphql
mutation {
  deleteRecord(id: "employee-id") {
    _id
  }
}
```

---

## Contributing

Feel free to fork the repository and make contributions. You can contribute by:

- Reporting bugs.
- Suggesting features.
- Creating pull requests for bug fixes or new features.

To get started with contributing, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a new pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to the open-source community for Apollo Server, React, and MongoDB.