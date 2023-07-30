import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsteriskedPipe } from 'src/app/pipes/asterisked.pipe';
import { HighlightPipe } from 'src/app/pipes/highlight.pipe';

@NgModule({
  declarations: [UsersComponent, AsteriskedPipe, HighlightPipe],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule]
})
export class UsersModule {}
