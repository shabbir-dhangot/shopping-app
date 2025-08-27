import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Ui5WebcomponentsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'shopping-app';
}
