import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OpenAIApi } from 'openai';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const configService = app.get(ConfigService);

  const configuration = {
    apiKey: configService.get<string>('OPENAI_API_KEY'),
    organization: configService.get<string>('OPENAI_ORGANIZATION_ID'),
    isJsonMime: () => false,
  };
  console.log(configuration);

  const openAIApi = new OpenAIApi(configuration);

  const models = await openAIApi.listModels();
  console.log('OpenAI Engines', models);
}

bootstrap();
