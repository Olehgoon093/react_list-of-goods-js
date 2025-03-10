import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortFill, setSortFill] = useState('');
  const [reversed, setReversed] = useState(false);

  const sortByAlphavit = () => {
    setGoods([...goods].slice().sort());
    setSortFill('Alphavit');
    setReversed(false);
  };

  const sortByLenghth = () => {
    const sortGoods = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sortGoods);

    setSortFill('Lenghth');
  };

  const sortByReverse = () => {
    const reversedGoods = [...goods].reverse();

    setGoods(reversedGoods);
    setReversed(!reversed);
  };

  const goReset = () => {
    setGoods(goodsFromServer);
    setSortFill('');
    setReversed(false);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sortFill !== 'Alphavit',
          })}
          onClick={sortByAlphavit}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': sortFill !== 'Lenghth',
          })}
          onClick={sortByLenghth}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': !reversed,
          })}
          onClick={sortByReverse}
        >
          Reverse
        </button>

        {(sortFill !== '' || reversed) && (
          <button
            type="button"
            className={cn('button is-danger', {
              'is-light': sortFill !== '',
            })}
            onClick={goReset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(item => (
          <li key={item} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
