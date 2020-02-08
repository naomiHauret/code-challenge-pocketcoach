import dayjs from "dayjs"

export function formatDatetime(timestamp) {
  return dayjs(timestamp).format("DD/MM/YYYY, HH:mm:ss")
}
