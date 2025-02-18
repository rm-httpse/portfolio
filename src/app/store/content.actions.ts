import { createAction, createActionGroup, props } from '@ngrx/store';

export const ContentActions = createActionGroup({
  source: 'Content',
  events: {
    'Retrieve': props<{ content: any }>(),
  }
})