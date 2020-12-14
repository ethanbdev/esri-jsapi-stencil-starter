import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render(): void {
    return (
      <div class="app-home">
        <header class="header">
          <h1 class="header-text">Stencil - ArcGIS JSAPI Example</h1>
        </header>
        <esri-map class="map-component" />
      </div>
    );
  }
}
