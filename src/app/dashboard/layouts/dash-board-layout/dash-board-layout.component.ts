import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  templateUrl: './dash-board-layout.component.html',
  styleUrls: ['./dash-board-layout.component.css']
})

export class DashBoardLayoutComponent {

  private authService = inject(AuthService)
  public user = computed(() => this.authService.currentUser());

}
