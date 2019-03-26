import { Component, Prop } from '@stencil/core';

import { Color } from '@ionic/core';
import { createColorClasses } from '@ionic/core/dist/collection/utils/theme';
import { createTypeClasses } from '../../utils/utils';

@Component({
  tag: 'scpl-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {

  @Prop() color: Color;

  @Prop() type: string = 'opaque'; // Opaque, Frosted, Transparent, Outline

  render() {
    return (
      <div class={createTypeClasses(this.type)}>
        <div class={createColorClasses(this.color)}>
          <div class="card">
            <div class="card-start">
              <slot name="start"></slot>
            </div>
            <div class="card-body">
              <slot></slot>
            </div>
            <div class="card-end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
