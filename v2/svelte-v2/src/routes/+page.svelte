<script>
  import { onMount } from 'svelte';
  import Form from '$lib/components/Form.svelte';
  import SaveToast from '$lib/components/SaveToast.svelte';
  import ArticlePreview from '$lib/components/ArticlePreview.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let title = '';
  let subtitle = '';
  let article = '';
  let showToast = false;
  let toastMessage = '';

  // Load from localStorage on mount
  onMount(() => {
    const saved = localStorage.getItem('article');
    if (saved) {
      const { title: t, subtitle: s, article: a } = JSON.parse(saved);
      title = t;
      subtitle = s;
      article = a;
    }
  });

  function handleSave() {
    localStorage.setItem('article', JSON.stringify({ title, subtitle, article }));
    toastMessage = 'Saved!';
    showToast = true;
    setTimeout(() => showToast = false, 3000);
  }

  function handleClear() {
    title = '';
    subtitle = '';
    article = '';
    localStorage.removeItem('article');
    toastMessage = 'Cleared!';
    showToast = true;
    setTimeout(() => showToast = false, 3000);
  }

  $: isFormEmpty = !title && !subtitle && !article;
</script>

<Header />

<div class="flex flex-col md:flex-row gap-8 p-4 min-h-screen bg-gray-100 pt-24 pb-24">
  <div class="flex-1 flex items-center justify-center">
    <Form
      bind:title
      bind:subtitle
      bind:article
    >
      <div slot="buttons">
        <button
          class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          on:click={handleSave}
          disabled={isFormEmpty}
          type="button"
        >
          Save
        </button>
        <button
          class="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
          on:click={handleClear}
          disabled={isFormEmpty}
          type="button"
        >
          Clear
        </button>
      </div>
    </Form>
  </div>
  <div class="flex-1 flex items-center justify-center">
    <ArticlePreview {title} {subtitle} {article} />
  </div>
</div>

<!-- Floating Save Button (bottom-right) -->
<button
  class="fixed bottom-28 right-8 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg disabled:opacity-50 z-50"
  on:click={handleSave}
  disabled={isFormEmpty}
  type="button"
>
  Save
</button>

<SaveToast message={toastMessage} show={showToast} />

<Footer />