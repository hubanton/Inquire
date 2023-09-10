import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { CardListComponent } from './components/card-list/card-list.component';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent, // this is the component with the <router-outlet> in the template
  },
  {
    path: 'question/:id',
    component: QuestionDetailComponent, // this is the component with the <router-outlet> in the template
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
