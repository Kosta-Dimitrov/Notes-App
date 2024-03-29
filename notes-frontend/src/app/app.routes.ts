import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent, children:[ 
        { path: '', component: NotesListComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}
