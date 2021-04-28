import { ActionType } from "../actions-types";
import {Dispatch} from 'redux'
import {
  Action,
  UpdateCellAction,
  MoveCellAction,
  DelecteCellAction,
  InsertCellAfterAction,
  Direction,

} from "../actions";
import { CellTypes } from "../cell";
import bundle from '../../bundler'

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const deleteCell = (id: string): DelecteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};
export const moveCell = (id: string, direcction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direcction,
    },
  };
};

export const inSertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};


export const createBundle = (cellId: string, input: string) =>{
  return async (dispatch: Dispatch<Action>)=>{
    dispatch({
      type:ActionType.BUNDLE_START,
      payload:{
        cellId,
      }
    })

    const result = await bundle(input)
    dispatch({
      type:ActionType.BUNDLE_COMPLETE,
      payload:{
        cellId,
        bundle:{
          code: result.code,
          err: result.err
        }
      }
    })
  }

}