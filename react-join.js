const React = require('react')

module.exports = function ReactJoin(props) {
  var
    separator = props.separator || ', ',
    children = props.children || null,
    len = children && children.length - 1,
    isString = typeof separator === 'string',
    isReact = React.isValidElement(separator),
    key = new Date();

  return len > 0
    ? children.reduce(function(links, link, index, array) {
        links.push(link)

        if (index < len) {
          links.push(
            isString
              ? separator
              : React.cloneElement(isReact ? separator : separator(index), {
                  key: key + (index + 1)
                })
          )
        }

        return links
      }, [])
    : children
}