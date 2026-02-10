import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [NxWelcomeComponent],
  selector: 'mfe-mfe-app-entry',
  template: `<mfe-nx-welcome></mfe-nx-welcome>`,
})
export class RemoteEntryComponent {}
