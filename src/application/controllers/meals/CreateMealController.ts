import KSUID from 'ksuid';

// Decorators
import { Injectable } from '@kernel/decorators/Injectable';

// Contracts
import { Controller } from '@application/contracts/Controller';

@Injectable()
export class CreateMealController extends Controller<CreateMealController.Response> {
  protected override async handle(): Promise<
    Controller.Response<CreateMealController.Response>
  > {
    return {
      statusCode: 201,
      body: {
        mealId: KSUID.randomSync().string,
      },
    };
  }
}

export namespace CreateMealController {
  export type Response = {
    mealId: string;
  };
}
