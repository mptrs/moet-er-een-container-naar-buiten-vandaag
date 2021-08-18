import { Component, Host, h, State, Event, EventEmitter } from '@stencil/core';

import { Answer } from '../../interfaces/Answer';

@Component({
  tag: 'trash-data',
  styleUrl: 'trash-data.css',
  shadow: true,
})
export class TrashData {
  postcodeInput: HTMLInputElement;
  huisnummerInput: HTMLInputElement;

  @State() isLoading = false;

  @Event() answerReceived: EventEmitter<Answer>;
  @Event() resetContent: EventEmitter;

  getGarbageData(event: Event) {
    event.preventDefault();
    this.resetContent.emit();
    this.isLoading = true;
    setTimeout(() => {
      fetch(
        `https://broad-cherry-0038.mptrs.workers.dev/https://www.rova.nl/api/waste-calendar/upcoming?postalcode=${this.postcodeInput.value.replace(' ', '')}&houseNumber=${
          this.huisnummerInput.value
        }`,
      )
        .then(res => {
          return res.json();
        })
        .then(parsedData => {
          if (!parsedData || parsedData.length === 0 || parsedData.isError) {
            throw new Error(parsedData.exceptionMessage);
          }
          this.answerReceived.emit({ today: this.dateIsTomorrow(parsedData[0].date), garbageType: parsedData[0].garbageType, nextTrashDate: this.nextDate(parsedData[0].date) });
          this.isLoading = false;
        })
        .catch(err => {
          this.handleError(err);
          this.isLoading = false;
        });
    }, 1000);
  }

  handleError(err) {
    console.error(err.message);
    this.answerReceived.emit({ message: 'Geen idee, even buiten checken?' });
  }

  dateIsTomorrow(date: Date): boolean {
    const trashDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (tomorrow.getFullYear() == trashDate.getFullYear() && tomorrow.getMonth() == trashDate.getMonth() && tomorrow.getDate() == trashDate.getDate()) {
      return true;
    }
    return false;
  }

  nextDate(date: Date): string {
    const nextDate = new Date(date);
    const dayBeforeNextDate = new Date(nextDate);
    dayBeforeNextDate.setDate(nextDate.getDate() - 1);
    return dayBeforeNextDate.toLocaleDateString();
  }

  render() {
    let buttonText = 'Moet ik lopen?';
    if (this.isLoading) {
      buttonText = 'Momentje...';
    }
    return (
      <Host>
        <form
          onSubmit={ev => {
            this.getGarbageData(ev);
          }}
        >
          <input
            type="text"
            required
            pattern="^[1-9][0-9]{3} ?(?!sa|sd|ss|SA|SD|SS)[A-Za-z]{2}$"
            name="postcode"
            id="postcode"
            placeholder="Postcode"
            ref={el => (this.postcodeInput = el)}
          />
          <input type="text" required name="huisnummer" id="huisnummer" placeholder="Huisnummer" ref={el => (this.huisnummerInput = el)} />
          <button type="submit" disabled={this.isLoading}>
            {buttonText}
          </button>
        </form>
      </Host>
    );
  }
}
