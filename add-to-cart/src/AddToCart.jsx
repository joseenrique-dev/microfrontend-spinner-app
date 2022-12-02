import { createEffect, createSignal, Show } from 'solid-js';

import { jwt, addToCart } from 'cart/cart';
import styles from './some-css.module.scss';

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <div id='add_to_cart'>
        {/* prettier-ignore */}
        <button
          onClick={() => addToCart(id)}
          class={`bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5 ${
            styles.exampleCss
          }`}
        >
          Add To Carts
        </button>
      </div>
    </Show>
  );
};
