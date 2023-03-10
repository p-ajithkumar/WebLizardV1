import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PublishComponent } from './publish/publish.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [{path:"login",component:LoginComponent},
{path:"",redirectTo:"login",pathMatch:'full'},
{path:"main",component:MainComponent},
{path:"register", component:RegisterComponent},
{path:"bookmarks",component:BookmarksComponent},
{path:'update',component:UpdatePasswordComponent},
{path:"publish",component:PublishComponent},
{path:"**",component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
