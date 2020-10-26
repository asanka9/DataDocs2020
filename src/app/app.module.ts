import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeepLearningComponent } from './deep-learning/deep-learning.component';
import { ToolsComponent } from './tools/tools.component';
import { CnnComponent } from './deep-learning/cnn/cnn.component';
import { EnsembleComponent } from './ensemble/ensemble.component';
import { RandomForestComponent } from './ensemble/random-forest/random-forest.component';
import { DecisiontreeComponent } from './decisiontree/decisiontree.component';
import { RegressionComponent } from './regression/regression.component';
import { KnnComponent } from './knn/knn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeepLearningComponent,
    ToolsComponent,
    CnnComponent,
    EnsembleComponent,
    RandomForestComponent,
    DecisiontreeComponent,
    RegressionComponent,
    KnnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
