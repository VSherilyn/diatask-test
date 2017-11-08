import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priority'})
export class PriorityPipe implements PipeTransform {
  public transform(value: number): string {
    let priority: string;
    switch (value) {
      case 0:
        priority = 'Low';
        break;
      case 10:
        priority = 'Medium';
        break;
      case 20:
        priority = 'High';
        break;
      default:
        priority = 'Not specified';
    }
    return priority;
  }
}