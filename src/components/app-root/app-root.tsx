import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="main">
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
