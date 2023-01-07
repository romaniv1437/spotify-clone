import { Component, OnInit } from '@angular/core';
import {config} from "libs/core/src/lib/app.config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerConfig = config.header;

  constructor() {}

  ngOnInit(): void {}
}
