const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

function validateTodoBody(req, res, next) {
    const body = req.body;
    const errors = [];

    if (!body || typeof body !== "object" || Array.isArray(body)) {
        return res.status(400).json({ error: "Invalid request body." });
    }

    if (typeof body.id !== "number") {
        errors.push("id must be a number.");
    }

    if (typeof body.name !== "string") {
        errors.push("name must be a string.");
    }

    if (typeof body.number !== "number") {
        errors.push("number must be a number.");
    }

    if (typeof body.description !== "string") {
        errors.push("description must be a string.");
    }

    if (typeof body.genre !== "string") {
        errors.push("genre must be a string.");
    }

    if (
        !Array.isArray(body.cast) ||
        !body.cast.every((item) => typeof item === "string")
    ) {
        errors.push("cast must be an array of strings.");
    }

    if (errors.length > 0) {
        const logMessage =
            `[${new Date().toISOString()}] ${errors.join(", ")}\n`;

        fs.appendFileSync(
            path.join(__dirname, "res.txt"),
            logMessage,
            "utf8"
        );

        return res.status(400).json({
            error: "Bad request.",
            details: errors,
        });
    }

    next();
}

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running." });
});

app.post("/api/todos", validateTodoBody, (req, res) => {
    res.status(201).json({
        message: "Data received.",
        todo: req.body,
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});