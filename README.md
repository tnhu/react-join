# react-join

Array.join() for React components.

## Setup

`npm install react-join`

## Sample

View interactive samples: https://codesandbox.io/s/mq690l2jvp

```javascript
import ReactJoin from 'react-join'

const links = [
  <Link key="google" href="https://google.com" name="Google"></Link>,
  <Link key="amazon" href="https://amazon.com" name="Amazon"></Link>,
  <Link key="linkedin" href="https://linkedin.com" name="LinkedIn"></Link>
]

// Join links by ", " (default)
<ReactJoin>{links}</ReactJoin>

// Join links by a React component
<ReactJoin separator={<span>, </span>}>{links}</ReactJoin>

// Join links by a closure that returns a React component
<ReactJoin separator={index => <span index={index}>, </span>}>{links}</ReactJoin>
```

## License

MIT