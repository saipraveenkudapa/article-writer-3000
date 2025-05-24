<script>
  export let title = '';
  export let subtitle = '';
  export let article = '';
  export let disabled = false;
</script>

<form class="flex flex-col gap-4 bg-white p-6 rounded shadow w-full" on:submit|preventDefault>
  <input
    class="border p-2 rounded"
    type="text"
    placeholder="Title"
    bind:value={title}
  />
  <input
    class="border p-2 rounded"
    type="text"
    placeholder="Subtitle"
    bind:value={subtitle}
  />
  <textarea
    class="border p-2 rounded h-48 resize-none"
    placeholder="Write your article here..."
    bind:value={article}
  />
  <div class="flex justify-center gap-4 mt-4">
    <slot name="buttons" />
  </div>
</form>