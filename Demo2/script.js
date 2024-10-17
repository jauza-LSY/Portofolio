    function addTodo() {
        const todoInput = document.getElementById('todo-input');
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoList = document.getElementById('todo-list');

        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        const todoTextElement = document.createElement('p');
        todoTextElement.textContent = todoText;

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = () => editTodo(todoItem, todoTextElement);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.onclick = () => todoList.removeChild(todoItem);

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(todoTextElement);
        todoItem.appendChild(buttonContainer);

        todoList.appendChild(todoItem);
        todoInput.value = '';
    }

    function editTodo(todoItem, todoTextElement) {
        const currentText = todoTextElement.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;

        const saveButton = document.createElement('button');
        saveButton.innerHTML = '<i class="fas fa-save"></i>';
        saveButton.onclick = () => {
            todoTextElement.textContent = input.value;
            todoItem.replaceChild(todoTextElement, input);
            buttonContainer.replaceChild(editButton, saveButton);
        };

        const buttonContainer = todoItem.querySelector('.button-container');
        const editButton = buttonContainer.querySelector('button');
        todoItem.replaceChild(input, todoTextElement);
        buttonContainer.replaceChild(saveButton, editButton);
    } 