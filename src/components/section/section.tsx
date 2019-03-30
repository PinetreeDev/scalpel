import { Component, Prop } from '@stencil/core';

import { Color } from '@ionic/core';
import { createColorClasses } from '@ionic/core/dist/collection/utils/theme';
import { createTypeClasses } from '../../utils/utils';

@Component({
  tag: 'scpl-section',
  styleUrl: 'section.scss',
  shadow: true
})
export class Section {

  @Prop() color: Color;

  @Prop() type: string = 'opaque'; // Opaque, Frosted, Transparent, Outline

  render() {
    return (
      <div class={createTypeClasses(this.type)}>
        <div class={createColorClasses(this.color)}>
          <div class="section">
            <div class="section-align-vert">
              <div class="section-start">
                <slot name="start"></slot>
              </div>
            </div>
            <div class="section-align-vert">
              <div class="section-body">
                <slot></slot>
              </div>
            </div>
            <div class="section-align-vert">
              <div class="section-end">
                <slot name="end"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
