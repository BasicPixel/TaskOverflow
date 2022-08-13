<script lang="ts">
  export let tasks: any;
</script>

<h1 class="text-blue-400 text-xl mb-4">tasks</h1>

<ul class="list-disc list-inside">
  {#each tasks as task}
    <li>{task.text}</li>
  {/each}
</ul>
