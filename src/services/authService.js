const db = require("../config/db");
const bcrypt = require("bcrypt");

async function registerUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name, email, hashedPassword]
    );
}

const jwt = require("jsonwebtoken");

async function loginUser(email, password) {
    const [users] = await db.execute(
        "SELECT * FROM users WHERE email=?",
        [email]
    );

    if (users.length === 0) {
        throw new Error("User not found");
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d"
        }
    );

    return token;
}

module.exports = {
    registerUser,
    loginUser
};

