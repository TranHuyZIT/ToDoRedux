import { Row, Tag, Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

import "./Todo.css";
// import { setCompleteToDoAction } from '../../redux/actions';
import toDoSlice, { deleteToDo, updateToDo } from "../TodoList/ToDoSlice";
import { toDoStatusSelector } from "../../redux/selector";
const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(completed);

  // const toDoStatus = useSelector(toDoStatusSelector);
  const toDoStatus = true;

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleDelete = (name) => {
    dispatch(toDoSlice.actions.deleteToDo(name));
    // dispatch(deleteToDo(name));
  };

  useEffect(() => {
    dispatch(
      toDoSlice.actions.setCompleteToDo({
        name,
        completed: checked,
      })
    );
    // dispatch(updateToDo({
    //   name,
    //   completed: checked
    // }))
  }, [checked]);

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <div>
        <DeleteTwoTone
          className="delete-icon"
          onClick={() => {
            handleDelete(name);
          }}
        />
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
        {toDoStatus === "loading" && <Spin />}
      </div>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}
