import * as React from 'react';
import { IContainerComponentState } from './IContainerComponentState';
import {
  IContainerComponentStateProps,
  IContainerComponentDispatchProps,
  IContainerComponentProps
} from './IContainerComponentProps';
import styles from './ContainerComponent.module.scss';

export type propsType = IContainerComponentStateProps & IContainerComponentDispatchProps & IContainerComponentProps;

class ContainerComponent extends React.Component<
  propsType,
  IContainerComponentState
  > {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={`${styles.containerComponent}`}>
        <h3>ContainerComponent Component!</h3>
      </div>
    );
  }
}

export default ContainerComponent;
