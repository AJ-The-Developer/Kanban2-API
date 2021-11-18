const express = require('express') ;
const router = express.Router();

const KanbanController = require('../controllers/kanban') ;
require('dotenv').config();


router.get('/:sprintId', KanbanController.sprint_get_single);

router.patch('/:sprintId', KanbanController.update_lists);


module.exports = router;