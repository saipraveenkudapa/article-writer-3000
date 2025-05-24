<script>
  export let disabled = false;
</script>
<button
  class="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-4 py-2 rounded transition"
  {disabled}
>
  <slot />
</button>