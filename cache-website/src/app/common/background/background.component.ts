import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-background-component',
  templateUrl: './background.component.html',
})
export class BackgroundComponent {
  title = input<string>('Welcome');
  isPage = input<boolean>(false);
}
