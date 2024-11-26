const { GoogleGenerativeAI } = require("@google/generative-ai");
// const {GEMINI_API_KEY} = require("./constants");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model