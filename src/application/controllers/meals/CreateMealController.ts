// Decorators
import { Injectable } from '@kernel/decorators/Injectable';

// Contracts
import { Controller } from '@application/contracts/Controller';

@Injectable()
export class CreateMealController extends Controller<'private', CreateMealController.Response> {
  protected override async handle({
    accountId,
  }: Controller.Request<'private'>): Promise<
    Controller.Response<CreateMealController.Response>
  > {
    return {
      statusCode: 201,
      body: {
        accountId,
      },
    };
  }
}

export namespace CreateMealController {
  export type Response = {
    accountId: string ;
  };
}
