const substringContentHtml = (value, length) => {
  let str
  if (value) {
    str = value.substring(0, length)
    str = str.replace(/\n+/g, '<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
    if (value.length > length) {
      str += '...'
    }
    return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + str
  }
}
const filterFileSize = value => {
  if (value < 1024) {
    return value + 'B'
  } else if (value < (1024 * 1024)) {
    let temp = value / 1024
    temp = temp.toFixed(1)
    return temp + 'KB'
  } else if (value < (1024 * 1024 * 1024)) {
    let temp = value / (1024 * 1024)
    temp = temp.toFixed(1)
    return temp + 'MB'
  } else {
    let temp = value / (1024 * 1024 * 1024)
    temp = temp.toFixed(1)
    return temp + 'GB'
  }
}
const filterFileType = file => {
  let str = ''
  if (file.folder) {
    str = 'folder'
  } else {
    let name = file.name || file.filename
    let index = name.lastIndexOf('.')
    str = name.substring(index + 1, file.length)
    str = str.toLowerCase()
  }
  return str
}
export {
  filterFileType,
  filterFileSize,
  substringContentHtml
}
