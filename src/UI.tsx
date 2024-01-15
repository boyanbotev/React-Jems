import React from 'react';
import { Button } from './Button';

type UIProps = {
  isStarted: boolean;
  startGame: () => void;
  prevImage: () => void;
  nextImage: () => void;
};
export function UI(props: UIProps) {
  const isStarted = props.isStarted;
  if (isStarted) {
    return (
      <>
        <Button handler={props.prevImage}>Previous Image</Button>
        <Button handler={props.nextImage}>Next Image</Button>
      </>
    );
  }
  else {
    return (
      <Button handler={props.startGame}>Start Demo</Button>
    );
  }
}
