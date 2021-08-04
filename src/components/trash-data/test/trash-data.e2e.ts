import { newE2EPage } from '@stencil/core/testing';

describe('trash-data', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<trash-data></trash-data>');

    const element = await page.find('trash-data');
    expect(element).toHaveClass('hydrated');
  });
});
