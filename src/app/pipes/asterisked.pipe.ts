import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterisked'
})
export class AsteriskedPipe implements PipeTransform {
  transform(value: string, position: number): string {
    if (!value) return value;

    const atIndex = value.indexOf('@');
    if (atIndex >= position) {
      const username = value.substring(0, atIndex);
      const maskedUsername =
        username.substring(0, position) + '*'.repeat(username.length - position);
      return maskedUsername + value.substring(atIndex);
    }

    return value;
  }
}
