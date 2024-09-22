const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input" });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highestAlphabet =
    alphabets.length > 0 ? [alphabets.sort().reverse()[0]] : [];

  const response = {
    is_success: true,
    user_id: "divya_gambhir_01012000", // Example format: full_name_ddmmyyyy
    email: "dg2028@srmist.edu.in",
    roll_number: "RA2111053010067",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
