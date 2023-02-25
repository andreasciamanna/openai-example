import { Module } from '@nestjs/common';
import openaiConfig from './openai.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
      load: [openaiConfig],
    }),
  ],
  exports: [ConfigurationModule],
})
export class ConfigurationModule {}
