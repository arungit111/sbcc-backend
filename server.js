const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const matchesRouter = require("./routes/matches");
app.use("/api/matches", matchesRouter);

// Test Route
app.get("/", (req, res) => {
    res.send("SBCC backend is running 👍");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
