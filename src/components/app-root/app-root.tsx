import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil - Esri Map Example</h1>
        </header>
        <esri-map></esri-map>
      </div>
    );
  }
}
