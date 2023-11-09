import { Component } from '@angular/core';
import { ISidebar } from '../../models';
import { CoreConstants } from '../../constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sidebar: ISidebar[] = CoreConstants.sidebar;
}
