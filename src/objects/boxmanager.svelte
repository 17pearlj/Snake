<script>
    import Emptybox from '../objects/emptybox.svelte';
    import Foodbox from '../objects/foodbox.svelte';
    import Snakebox from '../objects/snakebox.svelte';

    export let desState;
</script>

{#if desState == 0}
    <Emptybox/>
{:else if desState == 1}
    <Foodbox/>
{:else}
    <Snakebox/>
 {/if}