const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION_ID,
});

console.log(configuration);

const openai = new OpenAIApi(configuration);

async function test() {
  const response = await openai.listModels();

  console.log(response);
}

test();
