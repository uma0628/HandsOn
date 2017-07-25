import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IssueComponent } from './issue.component';

import { IssueService } from './issue.service';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueUpdateComponent } from './issue-update/issue-update.component';
import { IssueInputComponent } from './issue-input/issue-input.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  exports: [IssueComponent],
  declarations: [
    IssueComponent,
    IssueDetailComponent,
    IssueUpdateComponent,
    IssueInputComponent,
    IssueListComponent
  ],
  providers: [IssueService]
})
export class IssueModule { }
