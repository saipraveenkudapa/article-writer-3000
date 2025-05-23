<script>
  export let title = '';
  export let subtitle = '';
  export let article = '';
</script>

<article class="bg-white p-6 rounded shadow w-full min-h-80">
  <h2 class="text-xl font-bold mb-2">{title}</h2>
  <h3 class="text-md text-gray-500 mb-4">{subtitle}</h3>
  <div class="whitespace-pre-line">{article}</div>
</article>