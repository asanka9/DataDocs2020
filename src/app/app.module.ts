import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { DataScienceComponent } from './data-science/data-science.component';
import { MachineLearningComponent } from './data-science/machine-learning/machine-learning.component';
import { DecisionTreeAlgoComponent } from './data-science/machine-learning/decision-tree-algo/decision-tree-algo.component';
import { EnsembleTechniquesComponent } from './data-science/machine-learning/ensemble-techniques/ensemble-techniques.component';
import { RegressionAlgorithmsComponent } from './data-science/machine-learning/regression-algorithms/regression-algorithms.component';
import { KnnAlgoComponent } from './data-science/machine-learning/knn-algo/knn-algo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataScienceComponent,
    MachineLearningComponent,
    DecisionTreeAlgoComponent,
    EnsembleTechniquesComponent,
    RegressionAlgorithmsComponent,
    KnnAlgoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
