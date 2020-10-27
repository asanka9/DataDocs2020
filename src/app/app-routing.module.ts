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
  {path:'Machine Learning with NLP',component:TextPreprocessing01Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
