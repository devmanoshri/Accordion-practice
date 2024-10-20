import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccordionModule } from "../../projects/accordion/src/lib/accordion.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccordionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'accordian-practice01';
}
