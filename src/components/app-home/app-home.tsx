import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div class="app-home">
        <header>
          <h1>Stencil - ArcGIS JSAPI Example</h1>
        </header>
        <main>
          <esri-map></esri-map>
        </main>
      </div>
    );
  }
}
