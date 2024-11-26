Here is a sample `README.md` file for your URL shortener API project. This will help you document the project, explain the setup process, and guide users on how to use the API.

### `README.md` Example:

```markdown
# URL Shortener API

A simple URL shortener API built using Node.js, Express, and MongoDB. The API allows users to shorten URLs, retrieve the original URL, and track usage statistics like the number of clicks and the last access time.

## Features

- **Shorten a URL**: Accepts a URL and returns a shortened version.
- **Retrieve Original URL**: Redirects users to the original URL via the shortened link.
- **Track Usage Stats**: Returns the number of clicks and last accessed timestamp for a shortened URL.
- **Rate Limiting** (Bonus): Allows only a fixed number of requests per minute for a client.

## Requirements

- **Node.js** (version 14 or higher)
- **MongoDB** (Local or MongoDB Atlas)
- **Postman** or any other API testing tool for testing the API endpoints.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Vikasvs91/url-shortener-api.git
cd url-shortener-api
```

### 2. Install Dependencies

Run the following command to install the necessary packages:

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
MONGO_URI=mongodb://localhost:27017/urlShortener
PORT=5000
```

- Replace `MONGO_URI` with your MongoDB connection string. If you're using MongoDB Atlas, make sure to use the appropriate URI.
- `PORT` can be set to any port number; 5000 is used by default.

### 4. Run the Application

Start the server by running:

```bash
node server.js
```

The API will be running at `http://localhost:5000`.

## API Endpoints

### 1. POST `/api/shorten`

Shortens the provided URL.

**Request Body:**
```json
{
  "url": "http://example.com"
}
```

**Response:**
```json
{
  "shortenedUrl": "http://localhost:5000/api/{shortId}"
}
```

### 2. GET `/:shortId`

Redirects to the original URL based on the shortened ID.

**Example:**
- Request: `GET http://localhost:5000/api/{shortId}`
- Response: Redirects to the original URL.

### 3. GET `/api/stats/:shortId`

Fetches the usage statistics of the shortened URL.

**Example:**
- Request: `GET http://localhost:5000/api/stats/{shortId}`
- Response:
```json
{
  "clicks": 10,
  "lastAccessed": "2024-11-26T10:00:00Z"
}
```

## Testing the API

Use **Postman** or any similar tool to test the API endpoints.

### Example Requests

- **Shorten URL**: `POST http://localhost:5000/api/shorten` with body `{ "url": "http://example.com" }`.
- **Get Stats**: `GET http://localhost:5000/api/stats/{shortId}`.

## Deployment

The application can be deployed on services like **Render**, **Railway**, or **Vercel**.

- After deploying, you can update the `.env` file with the new `MONGO_URI` (if using MongoDB Atlas) and `PORT` for production.

## Error Handling

- The API will return appropriate error messages for invalid inputs.
- For example, when the URL is invalid, the response will be:
  ```json
  {
    "error": "Invalid URL"
  }
  ```

## Optional Features

- **Rate Limiting**: A fixed number of requests can be set for a client per minute. This can be implemented with libraries like `express-rate-limit`.

## Dependencies

- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling.
- **dotenv**: Loads environment variables from a `.env` file.
- **cors**: Middleware to enable Cross-Origin Requests.
- **body-parser**: Middleware to parse incoming request bodies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you'd like to contribute to the project, please fork the repository and submit a pull request with your changes.

---

Feel free to replace placeholders (e.g., `your-username`) with the appropriate details for your project.

---

### Additional Tips for Your `README.md`:

- **Deployment Link**: If you deploy your app to a service like Railway, Render, or Vercel, include the live link in the `README.md`.
- **Usage Screenshots**: You can add screenshots of the app in action (using tools like Postman or the deployed app) to make the documentation clearer.
- **Detailed Error Handling**: Include specific examples of errors your API will return, so users know how to handle them.


# URL Shortener API

A simple URL shortener API built using Node.js, Express, and MongoDB. The API allows users to shorten URLs, retrieve the original URL, and track usage statistics like the number of clicks and the last access time.

## Features

- **Shorten a URL**: Accepts a URL and returns a shortened version.
- **Retrieve Original URL**: Redirects users to the original URL via the shortened link.
- **Track Usage Stats**: Returns the number of clicks and last accessed timestamp for a shortened URL.
- **Rate Limiting** (Bonus): Allows only a fixed number of requests per minute for a client.

## Requirements

- **Node.js** (version 14 or higher)
- **MongoDB** (Local or MongoDB Atlas)
- **Postman** or any other API testing tool for testing the API endpoints.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Vikasvs91/url-shortener-api.git
cd url-shortener-api
