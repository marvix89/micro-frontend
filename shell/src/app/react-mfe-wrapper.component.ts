import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { createRoot, Root } from 'react-dom/client';
import { createElement } from 'react';

import { loadRemote, registerRemotes } from '@module-federation/enhanced/runtime';

@Component({
  selector: 'app-react-mfe-wrapper',
  standalone: true,
  template: `<div #reactHost style="width:100%;height:100%"></div>`,
})
export class ReactMfeWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('reactHost') reactHost!: ElementRef<HTMLDivElement>;

  private root: Root | null = null;

  async ngAfterViewInit() {
    registerRemotes([
      {
        name: 'react_mfe',
        entry: 'http://localhost:4202/react-mfe/remoteEntry.js',
        type: 'var'
      }
    ]);
    
    // Dynamically import the React component from the remote
    const m = await loadRemote<any>('react_mfe/App');
    const App = m.default;
    this.root = createRoot(this.reactHost.nativeElement);
    this.root.render(createElement(App));
  }

  ngOnDestroy() {
    this.root?.unmount();
  }
}
