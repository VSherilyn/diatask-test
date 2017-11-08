import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'status'})
export class StatusPipe implements PipeTransform {
  public transform(value: number): string {
    let status: string;
    switch (value) {
      case 0:
        status = 'New';
        break;
      case 10:
        status = 'In dev.';
        break;
      case 20:
        status = 'Closed';
        break;
      case 30:
        status = 'Canceled';
        break;
      default:
        status = 'Not specified';
    }
    return status;
  }
}