
c
// import "dotenv/config";
const client = new OpenAI({
  api_key ="AIzaSyD6VFOLkNJ6jfwr_GU602azE953fZBQq_U",
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

async function Main() {
  const response = await client.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      {
        role: "system",
                    content: "",
                },
      {
        role: "user",
        content: "how are you ??",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

export default Main;
