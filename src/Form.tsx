import { Fragment } from 'react';

export function Form() {
  return (
    <form>
      {Array.from({ length: 100 }).map((_, i) => {
        const checkId = `check${i}`;
        const buttonId = `button${i}`;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={i}>
            <div>
              <input type="checkbox" id={checkId} />
              <label htmlFor={checkId}>{checkId}</label>
            </div>

            <button type="button">{buttonId}</button>
          </Fragment>
        );
      })}
    </form>
  );
}
