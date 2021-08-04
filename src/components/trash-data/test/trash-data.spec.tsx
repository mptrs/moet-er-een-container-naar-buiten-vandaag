import { newSpecPage } from '@stencil/core/testing';
import { TrashData } from '../trash-data';

describe('trash-data', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrashData],
      html: `<trash-data></trash-data>`,
    });
    expect(page.root).toEqualHtml(`
      <trash-data>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </trash-data>
    `);
  });
});
