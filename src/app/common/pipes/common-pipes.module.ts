import { NgModule } from '@angular/core';
import { PriorityPipe } from './priority.pipe';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [
    PriorityPipe,
    StatusPipe
  ],
  exports: [
    PriorityPipe,
    StatusPipe
  ]
})

export class CommonPipesModule {

}
