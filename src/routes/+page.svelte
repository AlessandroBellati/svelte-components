<script lang="ts">
    import Header from "$lib/components/Header/Header.svelte";
    import HeaderListItem from "$lib/components/Header/HeaderListItem.svelte";
    import LinkButton from "$lib/components/LinkButton/LinkButton.svelte";
</script>

<Header>
    <svelte:fragment slot="logo">
        <a href="/">
            <img src="/favicon.png" alt="svelte icon" width="48px"/>
        </a>
    </svelte:fragment>

    <svelte:fragment slot="links">
        <HeaderListItem href="#">Link1</HeaderListItem>
        <HeaderListItem href="#">Link2</HeaderListItem>
        <HeaderListItem href="#">Link3</HeaderListItem>
    </svelte:fragment>
    
    <svelte:fragment slot="action">
        <LinkButton></LinkButton>
    </svelte:fragment>
</Header>
