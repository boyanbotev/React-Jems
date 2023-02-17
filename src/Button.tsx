import React from 'react';

type ButtonProps = {
  handler: () => void;
  children: React.ReactNode;
};
export function Button(props: ButtonProps) {
  return <button onClick={props.handler}>{props.children}</button>;
}
