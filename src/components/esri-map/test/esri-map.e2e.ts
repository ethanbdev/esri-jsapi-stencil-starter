import { newE2EPage } from '@stencil/core/testing';

describe('esri-map', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<esri-map></esri-map>');

    const element = await page.find('esri-map');
    expect(element).toHaveClass('hydrated');
  });
});
