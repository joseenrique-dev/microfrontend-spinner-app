import { createEffect, createSignal, Show } from 'solid-js';

import { jwt, addToCart } from 'cart/cart';
import './index.scss';

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
        <button
          onClick={() => addToCart(id)}
          class='bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5 example-css'
        >
          Add To Cartaa
        </button>
      </div>
    </Show>
  );
};
