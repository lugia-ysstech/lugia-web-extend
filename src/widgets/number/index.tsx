/**
 * @Description:
 * @author cuixia wang
 * @date 2020-11-03
 */
import React from "react";
import { connect } from "@lugia/lugiax";
interface TypeProps {
  value: number;
  onAdd: () => void;
  onSubtract: () => void;
}

const Model = (props: TypeProps) => {
  const { value, onAdd, onSubtract } = props;
  return (
    <div style={{ width: 200, textAlign: "center" }}>
      <div>绑定model-实现数字累加</div>
      <p>{value}</p>
      <a onClick={onAdd}>《 + 》</a>
      <a onClick={onSubtract}>《 - 》</a>
    </div>
  );
};

export default (props: { model: any }) => {
  const { model } = props;
  const Target = connect(
    model,
    (state: any) => {
      return { value: state.get("number") };
    },
    (mutations: { increment: () => void; decrement: () => void }) => {
      const { increment, decrement } = mutations || {};
      return { onAdd: increment, onSubtract: decrement };
    }
  )(Model);
  return <Target />;
};
