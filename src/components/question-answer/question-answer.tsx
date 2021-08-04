import { Component, Host, h, Listen, State } from '@stencil/core';
import { Answer } from '../../interfaces/Answer';

@Component({
  tag: 'question-answer',
  styleUrl: 'question-answer.css',
  shadow: true,
})
export class QuestionAnswer {
  @State() answer: Answer = null;

  @Listen('answerReceived', { target: 'body' })
  answerHandler(event: CustomEvent<Answer>) {
    window.scrollTo(0, 0);
    this.answer = event.detail;
  }

  @Listen('reset', { target: 'body' })
  resetContent() {
    this.answer = null;
  }

  render() {
    let headerContent = <h1>Moet er een container naar buiten vandaag?</h1>;
    let extraContent = null;
    if (this.answer) {
      if (this.answer.today) {
        extraContent = null;
        headerContent = (
          <h1>
            Jazeker,
            <br />
            pak de {this.answer.garbageType} container maar!
          </h1>
        );
      } else {
        headerContent = <h1>Vandaag niet!!</h1>;
        extraContent = (
          <p>
            Maar {this.answer.nextTrashDate} mag je lopen met {this.answer.garbageType} container.
          </p>
        );
      }
    }
    return (
      <Host>
        <header>{headerContent}</header>
        {extraContent}
      </Host>
    );
  }
}
