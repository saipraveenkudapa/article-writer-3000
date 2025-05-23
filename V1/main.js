const titleInput = document.getElementById('title');
const subtitleInput = document.getElementById('subtitle');
const articleInput = document.getElementById('article-content');

const previewTitle = document.getElementById('title-preview');
const previewSubtitle = document.getElementById('subtitle-preview');
const previewArticle = document.getElementById('article-preview');

const clearBtn = document.getElementById('clear');
const saveBtn = document.getElementById('save');
const floatingSaveBtn = document.getElementById('floating-save');

const statusMessage = document.getElementById('status-message');

function showMessage(text) {
    statusMessage.textContent = text;
    statusMessage.classList.add('show-message');
    setTimeout(() => statusMessage.classList.remove('show-message'), 3000);
}

function saveToLocalStorage() {
    const data = {
    title: titleInput.value,
    subtitle: subtitleInput.value,
    article: articleInput.value
    };
    localStorage.setItem('articleData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('articleData');
    if (saved) {
    const data = JSON.parse(saved);
    titleInput.value = data.title;
    subtitleInput.value = data.subtitle;
    articleInput.value = data.article;
    updatePreview();
    updateButtonState();
    }
}

function updatePreview() {
    previewTitle.textContent = titleInput.value;
    previewSubtitle.textContent = subtitleInput.value;
    previewArticle.innerHTML = articleInput.value.replace(/\n/g, '<br>');
  }
  

function clearAll() {
    titleInput.value = '';
    subtitleInput.value = '';
    articleInput.value = '';
    updatePreview();
    updateButtonState();
    localStorage.removeItem('articleData');
}

function updateButtonState() {
    const hasContent =
    titleInput.value || subtitleInput.value || articleInput.value;
    saveBtn.disabled = !hasContent;
    clearBtn.disabled = !hasContent;
    floatingSaveBtn.disabled = !hasContent;
}

[titleInput, subtitleInput, articleInput].forEach(input => {
    input.addEventListener('input', () => {
    updatePreview();
    updateButtonState();
    });
});

saveBtn.addEventListener('click', () => {
    saveToLocalStorage();
    showMessage('Saved!');
});

floatingSaveBtn.addEventListener('click', () => {
    saveToLocalStorage();
    showMessage('Saved!');
});

clearBtn.addEventListener('click', () => {
    clearAll();
    showMessage('Cleared!');
});

loadFromLocalStorage();