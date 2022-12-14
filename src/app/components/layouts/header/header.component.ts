import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { LikeService } from './../../../services/like.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 constructor(
    public cartService: CartService,
    public authService: AuthService,
    public likeService: LikeService
  ) {}

  ngOnInit(): void {}
}
