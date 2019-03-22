import * as React from 'react';
import { IFunctionalComponentProps } from './IFunctionalComponentProps';
import styles from './FunctionalComponent.module.scss';

const FunctionalComponent: React.SFC<IFunctionalComponentProps> = (props) => {
  return (
    <div className={`${styles.functionalComponent}`}>
      <h3>FunctionalComponent Stateless Component!</h3>
    </div>
  );
};

export default FunctionalComponent;
