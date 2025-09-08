import { Account } from '@application/entities/Account';

export class AccountItem {
  private readonly type = 'Account';
  private readonly keys: AccountItem.Keys;

  constructor(private readonly attrs: AccountItem.Attributes) {
    this.keys = {
      PK: AccountItem.getPK(this.attrs.id),
      SK: AccountItem.getSK(this.attrs.id),
      GS1PK: AccountItem.getGSI1PK(this.attrs.email),
      GS1SK: AccountItem.getGSI1SK(this.attrs.email),
    };
  }

  toItem(): AccountItem.ItemType {
    return {
      ...this.keys,
      ...this.attrs,
      type: this.type,
    };
  }

  static fromEntity(account: Account) {
    return new AccountItem({
      ...account,
      createdAt: account.createdAt.toISOString(),
    });
  }

  static getPK(accountId: string): AccountItem.Keys['PK'] {
    return `ACCOUNT#${accountId}`;
  }

  static getSK(accountId: string): AccountItem.Keys['SK'] {
    return `ACCOUNT#${accountId}`;
  }

  static getGSI1PK(email: string): AccountItem.Keys['GS1PK'] {
    return `ACCOUNT#${email}`;
  }

  static getGSI1SK(email: string): AccountItem.Keys['GS1SK'] {
    return `ACCOUNT#${email}`;
  }
}

export namespace AccountItem {
  export type Keys = {
    PK: `ACCOUNT#${string}`;
    SK: `ACCOUNT#${string}`;
    GS1PK: `ACCOUNT#${string}`;
    GS1SK: `ACCOUNT#${string}`;
  };

  export type Attributes = {
    id: string;
    email: string;
    externalId: string;
    createdAt: string;
  };

  export type ItemType = Keys & Attributes & { type: 'Account' };
}
