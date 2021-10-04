class Model {
    // Initiate a new Model
    constructor() {
        // Create a placeholder list
        this.items = [
            {id: 1, text: "Finish this app", complete: false},
        ]
    }

    // Add an item to the Todo List
    addItem(itemText) {

    }

    // Edit an item
    editItem(item_id, editedText) {

    }

    // Delete an item that we don't need anymore
    deleteItem(item_id) {

    }

    // Toggle completion status of item
    toggleItem(item_id) {

    }
}

class View {
    // Initiate a view
    constructor() {

    }

    // Create a DOM element; Apply custom CSS here?
    createElement() {
        
    }

    // Get an element from the DOM
    getElement(tag) {

    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}

const app = new Controller(new Model(), new View());
