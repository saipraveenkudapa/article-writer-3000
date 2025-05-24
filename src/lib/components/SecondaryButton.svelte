<script>
  export let disabled = false;
</script>
<button
  class="bg-gray-400 hover:bg-gray-500 disabled:bg-gray-200 text-white px-4 py-2 rounded transition"
  {disabled}
>
  <slot />
</button>