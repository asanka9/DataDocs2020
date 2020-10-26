import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DecisiontreeComponent} from './decisiontree/decisiontree.component';
import {RegressionComponent} from './regression/regression.component';
import {DeepLearningComponent} from './deep-learning/deep-learning.component';
import {EnsembleComponent} from './ensemble/ensemble.component';
import {RandomForestComponent} from './ensemble/random-forest/random-forest.component';
import {KnnComponent} from './knn/knn.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'Decision Tree',component:DecisiontreeComponent},
  {path:'Regression',component:RegressionComponent},
  {path:'Introduction to ANN',component:DeepLearningComponent},
  {path:'Ensemble Techniques',component:EnsembleComponent},
  {path:'Random Forest',component:RandomForestComponent},
  {path:'K-Nearest Neighbor (KNN) Algorithm',component:KnnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
