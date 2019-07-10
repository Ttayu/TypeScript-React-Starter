import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions/";
import Hello from "../components/Hello";
import { IStoreState } from "../types";

export const mapStateToProps = ({
  enthusiasmLevel,
  languageName,
}: IStoreState) => ({
  enthusiasmLevel,
  name: languageName,
});

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.EnthusiasmAction>,
) => ({
  onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
