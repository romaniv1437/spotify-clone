import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { IconsEnum } from '../enums/IconsEnum';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  register() {
    Object.keys(IconsEnum).map((key) =>
      this.matIconRegistry.addSvgIcon(
        IconsEnum[key as keyof typeof IconsEnum],
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `./assets/icons/${IconsEnum[key as keyof typeof IconsEnum]}.svg`
        )
      )
    );
  }
}
