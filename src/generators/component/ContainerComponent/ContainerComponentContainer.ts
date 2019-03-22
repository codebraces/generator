import { MapStateToPropsParam, MapDispatchToPropsParam, connect } from "react-redux";
import IState from "path-to-redux-state-interface";
import ContainerComponent from "./ContainerComponent";
import { IContainerComponentProps, IContainerComponentDispatchProps, IContainerComponentStateProps } from "./IContainerComponentProps";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const mapStateToProps: MapStateToPropsParam<
  IContainerComponentStateProps,
  IContainerComponentProps,
  IState
> = (state: IState) => {
  return {};
};

const mapDispatchToProps: MapDispatchToPropsParam<IContainerComponentDispatchProps, IContainerComponentProps> =
  (dispatch: ThunkDispatch<IState, undefined, AnyAction>) => ({
    // dispatch actions
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerComponent);
