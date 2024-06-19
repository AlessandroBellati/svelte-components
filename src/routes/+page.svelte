<script lang="ts">
    import Header from "$lib/components/Header/Header.svelte";
    import HeaderListItem from "$lib/components/Header/HeaderListItem.svelte";
    import LinkButton from "$lib/components/LinkButton/LinkButton.svelte";
</script>

<Header>
    {#snippet logo()}
        <img src="/favicon.png" alt="" width="48px">
    {/snippet}
    {#snippet links()}
        <HeaderListItem href="#">Link 1</HeaderListItem>
        <HeaderListItem href="#">Link 2</HeaderListItem>
        <HeaderListItem href="#">Link 3</HeaderListItem>
    {/snippet}
    {#snippet action()}
        <LinkButton href="#">LinkButton</LinkButton>
    {/snippet}
</Header>
