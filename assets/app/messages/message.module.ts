import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';
import { MessagesComponent } from './messages.component';

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class MessageModule {

}