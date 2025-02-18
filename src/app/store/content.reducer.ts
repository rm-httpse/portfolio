import { createReducer, on } from '@ngrx/store';
import { ContentActions } from './content.actions';

export const initialState = {}

export const contentReducer = createReducer(
  initialState,
  on(ContentActions.retrieve, (_state, { content }) => content)
);