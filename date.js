const today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}

let date = today.toLocaleDateString("en-US", options)
let day = today.toLocaleDateString("en-US", {weekday: "long"})

exports.date = date
exports.day = day
