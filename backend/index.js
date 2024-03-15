const express = require('express');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//CORS
app.use(cors());

// Middleware for parsing JSON body
app.use(express.json());

// Route for fetching all transactions
app.get('/transactions', async (req, res) => {
  
  try {
    // Fetch all transactions from Supabase
    const { data, error } = await supabase
      .from('transactions')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    // Send transaction data as response
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error('Error fetching transactions:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for fetching transactions by status
app.get('/transactions/status/:status', async (req, res) => {
  const { status } = req.params;
  try {
    // Fetch transactions by status from Supabase
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('status', status);

    if (error) {
      throw new Error(error.message);
    }

    // Send transaction data as response
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error(`Error fetching transactions with status '${status}':`, error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route for sorting transactions by date
app.get('/transactions/sort/:sortBy', async (req, res) => {
  const { sortBy } = req.params;
  try {
    // Fetch transactions and sort by specified property from Supabase
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .order(sortBy);

    if (error) {
      throw new Error(error.message);
    }

    // Send sorted transaction data as response
    res.json(data);
  } catch (error) {
    // Handle errors
    console.error(`Error sorting transactions by '${sortBy}':`, error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
