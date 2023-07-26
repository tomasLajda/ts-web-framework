import { Eventing } from './Eventing';

type KeyName = string | number | undefined;

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
  [key: string]: KeyName;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): KeyName {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
