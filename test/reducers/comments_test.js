import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import commentsReducer from '../../src/reducers/comments';

describe('Comments Reducer', () => {
  it('handles actions with unknown type', () => {
    expect(commentsReducer(undefined, {})).to.eql([]);
  });

  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'new comment',
    };
    expect(commentsReducer([], action)).to.eql(['new comment']);
  });
});
