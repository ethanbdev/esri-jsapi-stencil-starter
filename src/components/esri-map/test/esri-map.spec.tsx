import { newSpecPage } from '@stencil/core/testing';
import { EsriMap } from '../esri-map';

describe('esri-map', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EsriMap],
      html: `<esri-map></esri-map>`,
    });
    expect(page.root).toEqualHtml(`
      <esri-map>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </esri-map>
    `);
  });
});
