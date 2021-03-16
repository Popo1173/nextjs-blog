export default function handler(req, res) {
    //res200でjsonでオブジェクトを返す
    res.status(200).json({ text: 'Hello' })
  }