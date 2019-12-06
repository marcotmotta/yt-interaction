import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatInputModule, MatListModule } from '@angular/material';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ]
})
export class MaterialModule { }
