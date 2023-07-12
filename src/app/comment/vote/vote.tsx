import { useState } from 'react';
import classes from './vote.module.scss';
export const Vote = (props: { score: number }) => {
  const [count, setCount] = useState(props.score);
  return (
    <div className={classes.vote_block}>
      <span className={classes.control} onClick={() => setCount(count + 1)}>
        +
      </span>
      <span className={classes.count}>{count}</span>
      <span className={classes.control} onClick={() => setCount(count - 1)}>
        -
      </span>
    </div>
  );
};
