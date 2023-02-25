import { registerAs } from '@nestjs/config';

export default registerAs('openai', () => ({
  apiKey: process.env.OPENAI_API_KEY,
  modelId: process.env.OPENAI_MODEL_ID,
}));
