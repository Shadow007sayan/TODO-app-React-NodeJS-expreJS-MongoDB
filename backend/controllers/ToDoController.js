const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res)=> {
    const todo = await ToDoModel.find()
    res.send(todo)
}

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    const newToDo = new ToDoModel({ text });

    try {
        const savedToDo = await newToDo.save();
        console.log('Added Successfully');
        console.log(savedToDo);
        res.status(201).json(savedToDo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save to-do' });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;

    try {
        const updateToDo = await ToDoModel.findByIdAndUpdate(
            _id, 
            { text }, 
            { new: true } // This option returns the updated document
        );
        
        if (!updateToDo) {
            return res.status(404).json({ error: 'To-Do item not found' });
        }

        console.log('Updated Successfully');
        console.log(updateToDo);
        return res.status(200).json(updateToDo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to update to-do' });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;

    try {
        const deleteToDo = await ToDoModel.findByIdAndDelete(
            _id, 
            { new: true } // This option returns the updated document
        );
        
        if (!deleteToDo) {
            return res.status(404).json({ error: 'To-Do item not found' });
        }

        console.log('Deleted Successfully');
        console.log(deleteToDo);
        return res.status(200).json(deleteToDo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to delete to-do' });
    }
};