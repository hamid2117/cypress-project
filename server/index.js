const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
  const { title, accomplishment } = req.body
  if (title.includes('simple') || accomplishment.includes('simple')) {
    return res.status(406).json({
      msg: 'Your content is not appropriate',
    })
  }

  return res.json({
    msg: 'Accomplisment sent',
  })
})

app.listen(4000, () => {
  console.log('Now Listening on Port 4000')
})
