// Decorators
import { Injectable } from '@kernel/decorators/Injectable';
import { Schema } from '@kernel/decorators/Schema';

// Contracts
import { Controller } from '@application/contracts/Controller';

// Schemas
import {
  ConfirmForgotPasswordBody,
  confirmForgotPasswordSchema,
} from './schemas/confirmForgotPasswordSchema';

// UseCases
import { BadRequest } from '@application/errors/http/BadRequest';
import { ConfirmForgotPasswordUseCase } from '@application/usecases/auth/ConfirmForgotPasswordUseCase';

@Injectable()
@Schema(confirmForgotPasswordSchema)
export class ConfirmForgotPasswordController extends Controller<
  'public',
  ConfirmForgotPasswordController.Response
> {
  constructor(
    private readonly confirmForgotPasswordUseCase: ConfirmForgotPasswordUseCase,
  ) {
    super();
  }

  protected override async handle({
    body,
  }: Controller.Request<'public', ConfirmForgotPasswordBody>): Promise<
    Controller.Response<ConfirmForgotPasswordController.Response>
  > {
    try {
      const { email, confirmationCode, password } = body;

      await this.confirmForgotPasswordUseCase.execute({
        email,
        confirmationCode,
        password,
      });

      return {
        statusCode: 204,
      };
    } catch {
      throw new BadRequest('Failed. Try again.');
    }
  }
}

export namespace ConfirmForgotPasswordController {
  export type Response = null;
}
