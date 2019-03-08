import { Component } from '@stencil/core';

@Component({
  tag: 'scpl-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  render() {
    return (
      <div class="button">
        <div class="button-content">
          <slot></slot>
        </div>
      </div>
    );
  }

}
