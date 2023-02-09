export default async function handler(req, res) {
  // req is Node.js http.IncomingMessage, plus some pre-built middlewares
  // res is Node.js http.ServerResponse, plus some helper functions
  // More info: https://nextjs.org/docs/api-routes/introduction

  res.status(200).json({ text: "Hello" });
}
