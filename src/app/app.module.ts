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
import { StaticsComponent } from './data-science/statics/statics.component';
import { LifeCycleComponent } from './data-science/life-cycle/life-cycle.component';
import { DimensionReductionComponent } from './data-science/life-cycle/dimension-reduction/dimension-reduction.component';
import { ArComponent } from './data-science/computer-vision/ar/ar.component';
import { FeatureEngnrngComponent } from './data-science/life-cycle/feature-engnrng/feature-engnrng.component';
import { OpencvComponent } from './data-science/computer-vision/opencv/opencv.component';
import { ProjectsComponent } from './data-science/projects/projects.component';
import { TransferLearningComponent } from './data-science/deep-learning/cnn/transfer-learning/transfer-learning.component';
import { SvmComponent } from './data-science/machine-learning/svm/svm.component';
import { ClassificationInfoComponent } from './data-science/machine-learning/classification-info/classification-info.component';
import { LogisticRegressionComponent } from './data-science/machine-learning/logistic-regression/logistic-regression.component';
import { BoostingxagComponent } from './data-science/machine-learning/boostingxag/boostingxag.component';
import { HClusterComponent } from './data-science/machine-learning/h-cluster/h-cluster.component';
import { KmClusterComponent } from './data-science/machine-learning/km-cluster/km-cluster.component';
import { DbscanClusterComponent } from './data-science/machine-learning/dbscan-cluster/dbscan-cluster.component';



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
    StaticsComponent,
    LifeCycleComponent,
    DimensionReductionComponent,
    ArComponent,
    FeatureEngnrngComponent,
    OpencvComponent,
    ProjectsComponent,
    TransferLearningComponent,
    SvmComponent,
    ClassificationInfoComponent,
    LogisticRegressionComponent,
    BoostingxagComponent,
    HClusterComponent,
    KmClusterComponent,
    DbscanClusterComponent,

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
