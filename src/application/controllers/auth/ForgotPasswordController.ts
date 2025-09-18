// Decorators
import { Injectable } from '@kernel/decorators/Injectable';
import { Schema } from '@kernel/decorators/Schema';

// Contracts
import { Controller } from '@application/contracts/Controller';

// Schemas
import {
  ForgotPasswordBody,
  forgotPasswordSchema,
} from './schemas/forgotPasswordSchema';

// UseCases
import { ForgotPasswordUseCase } from '@application/usecases/auth/ForgotPasswordUseCase';

@Injectable()
@Schema(forgotPasswordSchema)
export class ForgotPasswordController extends Controller<
  'public',
  ForgotPasswordController.Response
> {
  constructor(private readonly forgotPasswordUseCase: ForgotPasswordUseCase) {
    super();
  }

  protected override async handle({
    body,
  }: Controller.Request<'public', ForgotPasswordBody>): Promise<
    Controller.Response<ForgotPasswordController.Response>
  > {
    try {
      const { email } = body;

      await this.forgotPasswordUseCase.execute({
        email,
      });
    } catch {
      // throw new BadRequest('Failed. Try again.');
    }

    return {
      statusCode: 204,
    };
  }
}

export namespace ForgotPasswordController {
  export type Response = null;
}
