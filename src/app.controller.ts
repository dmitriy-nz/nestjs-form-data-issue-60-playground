import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FormDataRequest } from 'nestjs-form-data';
import { FormDataTestDto } from './FormDataTestDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @FormDataRequest()
  getHello(@Body() testDto: FormDataTestDto): any {
    console.log(testDto);
  }
}
