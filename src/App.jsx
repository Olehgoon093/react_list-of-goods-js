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

  const sortByAlphavit = () => {
    setGoods([...goods].sort());
    setSortFill('Alphavit');
  };

  const sortByLenghth = () => {
    setGoods([...goods].sort((a, b) => a.length - b.length));
    setSortFill('Lenghth');
  };

  const sortByReverse = () => {
    setGoods([...goods].reverse());
    setSortFill('Reverse');
  };

  const goReset = () => {
    setGoods(goodsFromServer);
    setSortFill('');
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
            'is-light': sortFill !== 'Reverse',
          })}
          onClick={sortByReverse}
        >
          Reverse
        </button>

        {sortFill !== '' && (
          <button
            type="button"
            className={cn('button is-danger', { 'is-light': sortFill !== '' })}
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
