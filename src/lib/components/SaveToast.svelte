<script>
  export let message = '';
  export let show = false;
</script>

{#if show}
  <div class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div class="bg-black bg-opacity-80 text-white px-8 py-4 rounded text-xl animate-fade-toast">
      {message}
    </div>
  </div>
{/if}