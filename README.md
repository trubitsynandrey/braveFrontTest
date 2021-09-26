
npm run dev
### or
yarn dev
___________________________
Refactored code from test:

```JavaScript
function func1(s, a, b) {
  if (s.length == 0 ) {
        return -1;
    }
  s1 = s.toLowerCase();
  aIndex = s1.indexOf(a.toLowerCase());
  bIndex = s1.indexOf(b.toLowerCase());

  return Math.max(aIndex, bIndex);
}
```
