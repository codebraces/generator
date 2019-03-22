import * as React from 'react';
import { IClassComponentState } from './IClassComponentState';
import { IClassComponentProps } from './IClassComponentProps';
import styles from './ClassComponent.module.scss';

class ClassComponent extends React.Component<IClassComponentProps, IClassComponentState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.classComponent}`}>
        <h3>ClassComponent Component!</h3>
      </div>
    );
  }
}

export default ClassComponent;
