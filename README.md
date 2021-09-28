npm run dev

### or

yarn dev

---

Refactored code from test:

```JavaScript
function func1(s, a, b) {
  if (s.length == 0 ) {
        return -1;
    }
  let aIndex = -1;
  let bIndex = -1;
  s1 = s.toLowerCase().split("");
  s1.forEach((char, i) => {
    if (char === a.toLowerCase()) {
      aIndex = i;
    }
    if (char === b.toLowerCase()) {
      bIndex = i;
    }
  })
  return Math.max(aIndex, bIndex);
}
```
