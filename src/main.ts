import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import process from "process";
import { OpenAIApi } from "openai";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);


  const configuration = {
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID
  };
  console.log(configuration);

  const openAIApi = new OpenAIApi(configuration);

  const models = await openAIApi.listModels();
  console.log("OpenAI Engines", models);
}

bootstrap();
