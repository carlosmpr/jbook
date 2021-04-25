import { ActionType } from "../actions-types";
import {CellTypes} from  "../cell"

export type Direction = 'up' | 'down'
export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direcction: Direction;
  };
}

export interface DelecteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action =
  | MoveCellAction
  | DelecteCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
