import OpenAI from "openai";

export const uploadTest = async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const msg = "This is a test message";

  try {
    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      input: msg,
    });

    console.log(response);
    const data = response.output_text;
    res.json({ data });
  } catch (error) {
    console.error(error);
  }

  // res.json({
  //   message: "upload endpoint",
  // });
};
