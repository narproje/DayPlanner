const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/get', (req, res) => {
	try {
		const username = JSON.parse(req.query.loggedUser).username;
		User.findOne({ username }).then(docs => {
			res.send(docs.tasks);
		});
	} catch {
		res.status(401).json({ message: 'There is no token!' });
	}
});

router.post('/post', (req, res) => {
	try {
		const { title, date } = req.body;
		const username = JSON.parse(req.query.loggedUser).username;
		User.findOne({ username }).then(doc => {
			doc.tasks.push({
				title: title,
				date: date,
			});
			doc.save().then(() => res.end());
		});
	} catch {
		res.status(401).json({ message: 'There is no token!' });
	}
});

router.put('/put', (req, res) => {
	try {
		const { id, timeWorked, title, color, note, workTime, breakTime } = req.body;
		const username = JSON.parse(req.query.loggedUser).username;
		if (Object.keys(req.body).length < 2) {
			User.findOne({ username }).then(doc => {
				doc.tasks.map(task => {
					if (task.id === id) {
						task.status = task.status == 'incompleted' ? 'completed' : 'incompleted';
					}
				});
				doc.save().then(() => res.end());
			});
		} else if (Object.keys(req.body).length < 3) {
			User.findOne({ username }).then(doc => {
				doc.tasks.map(task => {
					if (task.id === id) {
						if (timeWorked > 0) task.timeWorked += timeWorked;
						else task.timeWorked += task.workTime;
					}
				});
				doc.save().then(() => res.end());
			});
		} else {
			User.findOne({ username }).then(doc => {
				if (!title) {
					return res.end();
				}

				doc.tasks.map(task => {
					if (task.id === id) {
						if (color) task.color = color;
						task.title = title;
						task.note = note;
						task.workTime = workTime;
						task.breakTime = breakTime;
					}
				});
				doc.save().then(() => res.end());
			});
		}
	} catch {
		res.status(401).json({ message: 'There is no token!' });
	}
});

router.delete('/delete', (req, res) => {
	try {
		const { id } = req.body;
		const username = JSON.parse(req.query.loggedUser).username;
		User.findOne({ username }).then(doc => {
			doc.tasks.map(task => {
				if (task.id === id) task.remove();
			});
			doc.save().then(() => res.end());
		});
	} catch {
		res.status(401).json({ message: 'There is no token!' });
	}
});

module.exports = router;
