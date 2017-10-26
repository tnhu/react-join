function ReactJoin(props) {
  var separator = props.separator || ', '
  var children = props.children || null
  var len = children && children.length - 1

  if (len > 0) {
    return children.reduce((links, link, index, array) => {
      links.push(link)

      if (index < len) {
        links.push(separator)
      }

      return links
    }, [])
  } else {
    return children
  }
}

module.exports = ReactJoin