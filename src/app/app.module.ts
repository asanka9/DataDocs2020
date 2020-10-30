import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { DataScienceComponent } from './data-science/data-science.component';
import { MachineLearningComponent } from './data-science/machine-learning/machine-learning.component';
import { DecisionTreeAlgoComponent } from './data-science/machine-learning/decision-tree-algo/decision-tree-algo.component';
import { EnsembleTechniquesComponent } from './data-science/machine-learning/ensemble-techniques/ensemble-techniques.component';
import { RegressionAlgorithmsComponent } from './data-science/machine-learning/regression-algorithms/regression-algorithms.component';
import { KnnAlgoComponent } from './data-science/machine-learning/knn-algo/knn-algo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaModule } from './materia/materia.module';
import { from } from 'rxjs';
import { NlpComponent } from './data-science/nlp/nlp.component';
import { TextPreprocessing01Component } from './data-science/nlp/text-preprocessing01/text-preprocessing01.component';
import { RnnComponent } from './data-science/deep-learning/rnn/rnn.component';
import { CnnComponent } from './data-science/deep-learning/cnn/cnn.component';
import { DeepLearningRnnComponent } from './data-science/nlp/deep-learning-rnn/deep-learning-rnn.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataScienceComponent,
    MachineLearningComponent,
    DecisionTreeAlgoComponent,
    EnsembleTechniquesComponent,
    RegressionAlgorithmsComponent,
    KnnAlgoComponent,
    NlpComponent,
    TextPreprocessing01Component,
    RnnComponent,
    CnnComponent,
    DeepLearningRnnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MateriaModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
