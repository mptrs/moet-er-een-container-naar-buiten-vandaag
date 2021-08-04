import { newSpecPage } from '@stencil/core/testing';
import { QuestionAnswer } from '../question-answer';

describe('question-answer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuestionAnswer],
      html: `<question-answer></question-answer>`,
    });
    expect(page.root).toEqualHtml(`
      <question-answer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </question-answer>
    `);
  });
});
