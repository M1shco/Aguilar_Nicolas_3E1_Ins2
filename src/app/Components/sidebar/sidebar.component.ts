import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  userName: string = "Nicolas";
  theme: string = "";
  widthMenu: number = 22; // Inicialmente visible
  visibleMenu: boolean = true;
  // visibleMenuu: boolean = false; // Comienza desplegado

  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu; // Alternar visibilidad
    if(!this.visibleMenu){
      this.widthMenu=10;
    }else{
      this.widthMenu=22;
    }
  }

  setThemeColor(color: string): void {
    this.theme = color;
  }

  setSizeMenu(): void {
    this.widthMenu += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 22; // Reiniciar ancho si excede 100
    }
  }
  // setVisibilityMenuu(): boolean {
  //   this.visibleMenuu = !this.visibleMenuu;
  //   return this.visibleMenuu;
  // }
}

    // // Alternar visibilidad