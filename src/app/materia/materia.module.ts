import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule } from '@angular/material/button';
const MaterialComponents = [MatSnackBarModule,MatStepperModule,MatButtonModule];


@NgModule({

  imports:[MaterialComponents],
  exports:[MaterialComponents]

})
export class MateriaModule {}
