import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  @Input() title ='';
  @Input() menuItens: MenuItem[] = [];
}
