import * as React from 'react';

export interface DotdotdotProps {
  children?: React.ReactNode,
  clamp: string | number | boolean,
  truncationChar?: string,
  useNativeClamp?: boolean,
  className?: string,
  tagName?: string,
  splitOnChars?: string[],
  splitEveryChars?: number,
  animate?: boolean,
}

export default class Dotdotdot extends React.Component<DotdotdotProps> { }
