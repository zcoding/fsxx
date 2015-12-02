# fsxx
async fs module with ES2015 Promises.

## API

### `.mkdir(path)`
```javascript
fsxx.mkdir('./what/you/want').then((dest) => {
  // finished, and you get the dest path
});
```
Notice:
1. will not throw any error if the path already exist(just do nothing and return the dest path)

### `.sata(path)`
```javascript
fsxx.stat('path/to/any').then((stat) => {
  // finished, and you get the stat object
});
```

### `.rmdir`
