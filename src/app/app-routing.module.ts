import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DecisionTreeAlgoComponent} from './data-science/machine-learning/decision-tree-algo/decision-tree-algo.component';
import {RegressionAlgorithmsComponent} from './data-science/machine-learning/regression-algorithms/regression-algorithms.component';
import {DeepLearningComponent} from './data-science/deep-learning/deep-learning.component';
import {EnsembleTechniquesComponent} from './data-science/machine-learning/ensemble-techniques/ensemble-techniques.component';
import {RandomForestComponent} from './data-science/machine-learning/ensemble-techniques/random-forest/random-forest.component';
import {KnnAlgoComponent} from './data-science/machine-learning/knn-algo/knn-algo.component';
import {MachineLearningComponent} from './data-science/machine-learning/machine-learning.component';
import {NlpComponent} from './data-science/nlp/nlp.component';
import {TextPreprocessing01Component} from './data-science/nlp/text-preprocessing01/text-preprocessing01.component';
import {RnnComponent} from './data-science/deep-learning/rnn/rnn.component';
import {DeepLearningRnnComponent} from './data-science/nlp/deep-learning-rnn/deep-learning-rnn.component';
import {CnnComponent} from './data-science/deep-learning/cnn/cnn.component';
import {DimensionReductionComponent} from './data-science/life-cycle/dimension-reduction/dimension-reduction.component';
import {ArComponent} from './data-science/computer-vision/ar/ar.component';
import {FeatureEngnrngComponent} from './data-science/life-cycle/feature-engnrng/feature-engnrng.component';
import {LifeCycleComponent} from './data-science/life-cycle/life-cycle.component';
import {StaticsComponent} from './data-science/statics/statics.component';
import {OpencvComponent} from './data-science/computer-vision/opencv/opencv.component';
import {ProjectsComponent} from './data-science/projects/projects.component';
import {TransferLearningComponent}  from './data-science/deep-learning/cnn/transfer-learning/transfer-learning.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'Decision Tree',component:DecisionTreeAlgoComponent},
  {path:'Regression',component:RegressionAlgorithmsComponent},
  {path:'Introduction to ANN',component:DeepLearningComponent},
  {path:'Ensemble Techniques',component:EnsembleTechniquesComponent},
  {path:'Random Forest',component:RandomForestComponent},
  {path:'K-Nearest Neighbor (KNN) Algorithm',component:KnnAlgoComponent},
  {path:'What is Machine Learning?',component:MachineLearningComponent},
  {path:'Natural Language Processing (NLP)',component:NlpComponent},
  {path:'NLP with Machine Learning',component:TextPreprocessing01Component},
  {path:'Recurrent Nueral Network (RNN)',component:RnnComponent},
  {path:'NLP with Deep Learning',component:DeepLearningRnnComponent},
  {path:'Convolution Nueral Network (CNN)',component:CnnComponent},
  {path:'Dimensionality Reduction',component:DimensionReductionComponent},
  {path:'Augmented reality (AR)',component:ArComponent},
  {path:'Feature Engineering',component:FeatureEngnrngComponent},
  {path:'Life Cycle Of Data Science',component:LifeCycleComponent},
  {path:'Statics',component:StaticsComponent},
  {path:'Open CV',component:OpencvComponent},
  {path:'Projects',component:ProjectsComponent},
  {path:'Transfer Learning with CNN',component:TransferLearningComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
