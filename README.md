<h1 align="center"> Book API </h2>

THis project is a simple RESTful API for managing a collection of books. It was created to showcase some of my skills as a junior backend developer and was built using Typescript, MySQL and Jest. In the development I tried to follow SOLID principles and Test-Driven Development techniques to ensure code quality and maintainability. I also applied some design patterns, such as repository and service layers to separate concerns and improve code organization.

## Technologies Used

- Express
- Typescript
- MySQL
- Jest
- Docker

## Getting Started

### Pre requisites

- Node.js
- Docker

### Installation

1. Clone the repository:

    ```shell
    git clone https://github.com/gapesasi/api-rest-typescript.git
    cd api-rest-typescript
    ```

2. Install dependencies:

    ```shell
    npm install
    ```

3. Start the docker container:

    ```shell
    npm run docker
    ```

4. Run the migrations to setup the database table:

    ```shell
    npm run migrate
    ```

5. Start the development server:

    ```shell
    npm run start:dev
    ```

## API Endpoints

- GET /books: Retrieve all books.
- GET /books/:id: Retrieve a book by ID.
- POST /books: Create a new book.
- PUT /books/:id: Update a book by ID.
- DELETE /books/:id: Delete a book by ID.

## Testing

To run the tests, use the following command:

```shell
npm run test
```
