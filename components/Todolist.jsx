import React, { useContext, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todolist(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  // const [isMouseMove, setIsMouseMove] = useState(false);
  const { selTheme } = useContext(ThemeContext);
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
    >
      <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
        <span
          style={
            props.completed
              ? { textDecoration: "line-through", color: selTheme.foreground }
              : { color: selTheme.foreground }
          }
          className="me-auto"
        >
          {props.title}
        </span>
        {isMouseOver && (
          <>
            <button onClick={() => props.onMark()} className="btn btn-success">
              <IconCheck />
            </button>
            <button
              onClick={() => props.onMoveUp()}
              className="btn btn-secondary"
            >
              <IconArrowUp />
            </button>
            <button
              onClick={() => props.onMoveDown()}
              className="btn btn-secondary"
            >
              <IconArrowDown />
            </button>
            <button onClick={() => props.onDelete()} className="btn btn-danger">
              <IconTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
