import moment from 'moment'
const oneDayLong = 24 * 60 * 60 * 1000
const weekSection = (date) => {
  let start = moment(date).format('YYYY年MM月DD日')
  let end = moment(date.getTime() + (oneDayLong * 6)).format('MM月DD日')
  return start + '至' + end
}
const date = (date, formatType) => {
  return moment(date).format(formatType)
}
const gapNowTime = (time) => {
  let t = moment(time, 'YYYYMMDD hh:mm:ss').fromNow()
  return t
}
const filterMinute = (mss) => {
  var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = parseInt((mss % (1000 * 60)) / 1000)
  return minutes + '分' + seconds + '秒'
}
export {
  date,
  gapNowTime,
  filterMinute,
  weekSection
}
