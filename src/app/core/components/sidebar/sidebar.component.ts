import { Component } from '@angular/core';
import { ISidebar } from '../../models';
import { CoreConstants } from '../../constants';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {
  sidebar: ISidebar[] = CoreConstants.sidebar;
}
