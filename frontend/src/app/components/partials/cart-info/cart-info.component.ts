import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart-info',
  standalone: true,
  imports: [RouterLink, FormsModule,RouterOutlet,CommonModule],
  templateUrl: './cart-info.component.html',
  styleUrl: './cart-info.component.css'
})
export class CartInfoComponent {
  @Input()
  visible: boolean = false;
  @Input()
  notFoundMessage: string = "Not Found";
  @Input()
  resetLink: string = "Reset";
  @Input()
  resetLinkRoute: string = "/";

}
