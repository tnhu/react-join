# react-join

Array.join() for React components.

## Setup

`npm install react-join`

## Sample

https://codesandbox.io/s/92lr1knk4

```javascript
import ReactJoin from 'react-join'

const links = [
  <Link key="google" href="https://google.com" name="Google"></Link>,
  <Link key="amazon" href="https://amazon.com" name="Amazon"></Link>,
  <Link key="linkedin" href="https://linkedin.com" name="LinkedIn"></Link>
]

<ReactJoin separator={<span>, </span>}>
  {links}
</ReactJoin>
```

## License

MIT