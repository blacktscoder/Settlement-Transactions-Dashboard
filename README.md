# Settlement Transactions Dashboard

Welcome to the Settlement Transactions Dashboard application! This application allows users to view their transaction history with details such as amount, date, description, and status. The dashboard provides filtering and sorting functionalities for a seamless user experience.

![Image Description](https://example.com/path/to/your/image.png)


## Backend

### Technologies Used

- **Express.js:** A minimal and flexible Node.js web application framework used for building the backend server.
- **Supabase:** An open-source alternative to Firebase providing a backend-as-a-service platform with features like database management and authentication.

### Installation and Setup

1. Clone the backend repository:

   ```bash
   git clone <backend_repository_url>
   ```

2. Navigate to the backend directory:

   ```bash
   cd backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and configure Supabase credentials:

   ```plaintext
   SUPABASE_URL=<supabase_url>
   SUPABASE_KEY=<supabase_key>
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

### API Documentation

- **GET /transactions:** Fetches transaction data from the Supabase database.
  - Response Format:
    ```json
    [
      {
        "id": 1,
        "amount": 100,
        "date": "2024-03-15",
        "description": "Purchase",
        "status": "settled",
        "transaction_id": "1234567890",
        "transaction_type": "debit",
        "currency": "USD",
        "merchant_name": "Example Merchant",
        "merchant_location": "Example Location",
        "payment_method": "Credit Card"
      },
      // More transactions...
    ]
    ```

## Frontend

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript used for type-checking and improving code maintainability.
- **Mantine:** A React component library for building modern and accessible UIs.
- **@mantine/react-table:** A Mantine package providing table components for displaying data.

### Installation and Setup

1. Clone the frontend repository:

   ```bash
   git clone <frontend_repository_url>
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the frontend development server:

   ```bash
   npm start
   ```

### Usage

- Access the application in a web browser at `http://localhost:3000`.
- Use the dashboard to view transaction history, filter transactions, and sort them based on different criteria.

