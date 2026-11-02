const input = document.querySelector('#favchap');
const addButton = document.querySelector('#add-chapter');
const list = document.querySelector('#list');

function addChapter(value = input.value.trim()) {
    if (!value) {
        input.focus();
        return;
    }

    const item = document.createElement('li');
    const chapter = document.createElement('span');
    const deleteButton = document.createElement('button');

    chapter.textContent = value;
    deleteButton.type = 'button';
    deleteButton.className = 'delete';
    deleteButton.setAttribute('aria-label', `Excluir ${value}`);
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => item.remove());

    item.append(chapter, deleteButton);
    list.append(item);
    input.value = '';
    input.focus();
}

addButton.addEventListener('click', () => addChapter());
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') addChapter();
});

['Alma 5', 'Alma 32', 'Helamã 5', 'Morôni 7'].forEach(addChapter);
