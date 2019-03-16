import { Component, Prop } from '@stencil/core';

import { Color } from '@ionic/core';
import { createColorClasses } from '@ionic/core/dist/collection/utils/theme';

@Component({
  tag: 'scpl-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() color?: Color;

  render() {
    return (
      <div class={createColorClasses(this.color)}>
        <div class="button">
          <div class="button-content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }

}
