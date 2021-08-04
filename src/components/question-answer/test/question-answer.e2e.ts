import { newE2EPage } from '@stencil/core/testing';

describe('question-answer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<question-answer></question-answer>');

    const element = await page.find('question-answer');
    expect(element).toHaveClass('hydrated');
  });
});
