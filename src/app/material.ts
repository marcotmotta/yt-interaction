import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
//import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
