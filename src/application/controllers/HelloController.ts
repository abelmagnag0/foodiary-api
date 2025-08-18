// Decorators
import { Injectable } from '@kernel/decorators/Injectable';
import { Schema } from '@kernel/decorators/Schema';

// Contracts
import { Controller } from '@application/contracts/Controller';

// Schemas
import { HelloBody, helloSchema } from './schemas/helloSchema';

// UseCases
import { HelloUseCase } from '@application/usecases/HelloUseCase';

@Injectable()
@Schema(helloSchema)
export class HelloController extends Controller<unknown> {
  constructor(
    private readonly helloUseCase: HelloUseCase,
  ) {
    super();
  }

  protected override async handle(
    request: Controller.Request<HelloBody>,
  ): Promise<Controller.Response<unknown>> {
    const result = await this.helloUseCase.execute({
      email: request.body.email,
    });

    return {
      statusCode: 200,
      body: {
        result,
      },
    };
  }
}
