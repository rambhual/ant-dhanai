import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AuthComponent } from './auth.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'register',
        component: RegisterFormComponent
      }
    ])
  ],
  exports: [AuthComponent, RegisterFormComponent]
})
export class AuthModule {}
