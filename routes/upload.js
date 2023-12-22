const express = require('express')
const multer = require('multer')
const { join } = require('path')
const UPLOAD_DIR = join(__dirname, '/public/uploads')
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
})

const upload = multer({ storage: storage })

const router = express.Router()

router.post('/', upload.single('file'), (req, res, next) => {
	// "file" 是提交表单时 input 标签的 name 属性值
	// multer 会添加一个 file 对象在 req 中，你可以通过这个对象来访问文件详情
	console.log(req.file)
	// use multer to set file to ../public/uploads


	const response = {
		c: 0,
		m: 'File uploaded successfully',
		d: {
			url: `http://localhost:8808/public/uploads`
		}
	}


	res.json(response)
})

module.exports = router
