import { describe } from 'riteway';
import { safe, fun, inc, inc10, inc20 } from '../source';

describe('object privacy', async should => {
  const { assert } = should();

  const secret = 'user data';
  const obj = safe(secret);

  assert({
    given: 'private data',
    should: 'not expose private data',
    actual: Object.getOwnPropertyNames(obj).length,
    expected: 1
  });

  assert({
    given: 'private data',
    should: 'expose a privileged method',
    actual: obj.getSecret(),
    expected: secret
  });
});

describe('fixed arguments', async should => {
  const { assert } = should();

  const secret = 'user data';
  const secret2 = 'another secret';
  const secret3 = 'yet another secret'
  const getSecret = fun(secret);
  const getSecret2 = fun(secret2);
  const getSecret3 = fun(secret3);

  assert({
    given: 'private data',
    should: 'return a function with the data fixed in closure',
    actual: getSecret(),
    expected: secret
  });

  assert({
    given: 'private data',
    should: 'return a function with the data fixed in closure',
    actual: getSecret2(),
    expected: secret2
  });

  assert({
    given: 'private data',
    should: 'return a function with the data fixed in closure',
    actual: getSecret3(),
    expected: secret3
  });


  assert({
    given: 'a number to increment',
    should: 'increment by 1',
    actual: inc(2),
    expected: 3
  });

  assert({
    given: 'a number to increment',
    should: 'increment by 10',
    actual: inc10(2),
    expected: 12
  });

  assert({
    given: 'a number to increment',
    should: 'increment by 20',
    actual: inc20(2),
    expected: 22
  });
});
