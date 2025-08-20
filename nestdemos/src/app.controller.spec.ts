import { Test, TestingModule } from '@nestjs/testing';
import { SnackController } from './app.controller';
import { AppService } from './snack.service';

describe('AppController', () => {
  let appController: SnackController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SnackController],
      providers: [AppService],
    }).compile();

    appController = app.get<SnackController>(SnackController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
