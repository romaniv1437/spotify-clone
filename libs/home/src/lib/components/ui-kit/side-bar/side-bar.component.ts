import { Component, OnInit } from '@angular/core';
import { IconsEnum } from 'libs/core/src/lib/enums/IconsEnum';
import {config} from "libs/core/src/lib/app.config";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  public icons = IconsEnum;
  public sidebarConfig = config.sidebar;
  constructor() {}

  ngOnInit(): void {}
}
