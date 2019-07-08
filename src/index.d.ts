import * as React from 'react';

export interface DotdotdotProps extends React.HTMLProps<Dotdotdot> {
  /**
   * The number of lines that should be displayed, a css pixel value for height
   * as a string (i.e. "100px"), or "auto" to try and fill the available space
   */
  clamp: string | number | 'auto';

  /** Use -webkit-line-clamp available in WebKit (Chrome, Safari) only */
  useNativeClamp?: boolean;

  /** Split on sentences (periods), hypens, en-dashes, em-dashes, and words */
  splitOnChars?: string[];

  /** Animate clamp */
  animate?: boolean;

  /**
   * The character to insert at the end of the HTML element after trunation is
   * performed.
   */
  truncationChar?: string;

  /** String of HTML to use instead of truncationChar */
  truncationHTML?: string;

  /** The type of HTML tag which will wrap the component's content */
  tagName?: string;
}

export default class Dotdotdot extends React.Component<DotdotdotProps> { }
