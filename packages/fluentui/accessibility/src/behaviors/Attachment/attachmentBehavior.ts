import * as keyboardKey from 'keyboard-key';

import { IS_FOCUSABLE_ATTRIBUTE } from '../../attributes';
import { Accessibility } from '../../types';

/**
 * @specification
 * Adds attribute 'tabIndex=0' to 'root' slot.
 * Triggers 'performClick' action with 'Enter' or 'Spacebar' on 'root'.
 */
const attachmentBehavior: Accessibility = () => ({
  attributes: {
    root: {
      tabIndex: 0,
      [IS_FOCUSABLE_ATTRIBUTE]: true
    }
  },
  keyActions: {
    root: {
      performClick: {
        keyCombinations: [{ keyCode: keyboardKey.Enter }, { keyCode: keyboardKey.Spacebar }]
      }
    }
  }
});

export default attachmentBehavior;
